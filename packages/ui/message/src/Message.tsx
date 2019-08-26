import React, { useEffect, useRef } from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import {
  NoticeContainer,
  NoticeContent,
  NotificationContainer,
  NoticeIcon,
  NoticeText,
} from './styles'
import { v4 } from 'uuid'
import Animate from 'rc-animate'
import errorIcon from './img/error.svg'
import successIcon from './img/success.svg'
import warningIcon from './img/warning.svg'
import infoIcon from './img/info.svg'

export interface INoticeOptions {
  delay?: number
}

export interface INoticeProps {
  onClose: () => void
  children: string[]
  type: string
  options?: INoticeOptions
}

export interface IMessageApi {
  create
  info: (content: string | string[], options?: object) => void
  error: (content: string | string[], options?: object) => void
  success: (content: string | string[], options?: object) => void
  warring: (content: string | string[], options?: object) => void
}

const Notice = ({ onClose, children, type, options = {} }: INoticeProps) => {
  const DEFAULT_DELAY = 2000
  const timer = useRef(null)

  useEffect(() => {
    setTimer()
    return () => clearTimeout(timer.current)
  }, [])

  const setTimer = (stop = false) => {
    if (stop && timer.current) {
      clearTimeout(timer.current)
      return
    }
    timer.current = setTimeout(() => onClose(), options.delay || DEFAULT_DELAY)
  }

  const renderIconByType = iconType => {
    switch (iconType) {
      case 'info':
        return <NoticeIcon src={infoIcon} />
      case 'error':
        return <NoticeIcon src={errorIcon} />
      case 'warring':
        return <NoticeIcon src={warningIcon} />
      case 'success':
        return <NoticeIcon src={successIcon} />
      default:
        return null
    }
  }

  if (typeof children === 'string') {
    children = [children]
  }

  const handleMouseEnter = () => setTimer(true)
  const handleMouseLeave = () => setTimer()
  return (
    <NoticeContainer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {renderIconByType(type)}
      <NoticeContent>
        {children.map(text => (
          <NoticeText key={`key-${text}`}>{text}</NoticeText>
        ))}
      </NoticeContent>
    </NoticeContainer>
  )
}

class Notification extends React.Component {
  state = {
    notices: [],
  }

  onCloseNotice = delKey => {
    const filteredNotices = this.state.notices.filter(
      ({ key }) => key !== delKey,
    )
    this.setState({ notices: filteredNotices })
  }

  createNotice = queueNotices => {
    const { notices } = this.state

    const newState = [
      ...notices,
      ...queueNotices.map(notice => ({ key: v4(), ...notice })),
    ]

    this.setState({ notices: newState })
  }

  render() {
    const { notices } = this.state

    return (
      <NotificationContainer>
        <Animate transitionName='fade'>
          {notices.map(({ key, content, type, options }) => {
            return (
              <Notice
                key={key}
                type={type}
                options={options}
                onClose={() => this.onCloseNotice(key)}
              >
                {content}
              </Notice>
            )
          })}
        </Animate>
      </NotificationContainer>
    )
  }
}

const message = ((): IMessageApi => {
  let rootInstance = null
  let ref = null
  let queue = []
  let timer = null

  const destroy = div => {
    unmountComponentAtNode(div)
    div.parentNode.removeChild(div)
  }

  const createRootInstance = domNode => {
    const div = document.createElement('div')
    if (domNode) {
      domNode.appendChild(div)
    } else {
      document.body.appendChild(div)
    }
    return div
  }

  const setRef = refNotification => {
    ref = refNotification
  }

  const handlerCreateNotice = (content, type, options) => {
    if (!rootInstance) {
      createInstance()
    }

    queue.push({ content, type, options })

    const fn = () => {
      ref.createNotice(queue)
      queue = []
    }

    if (timer) {
      clearTimeout(timer)
      timer = setTimeout(fn, 0)
      return
    }
    timer = setTimeout(fn, 0)
  }

  const createInstance = (domNode?: object) => {
    if (rootInstance) {
      return
    }

    rootInstance = createRootInstance(domNode)
    render(<Notification ref={setRef} />, rootInstance)
  }

  return {
    create: createInstance,
    info: (content: string | string[], options?: object) =>
      handlerCreateNotice(content, 'info', options),
    error: (content: string | string[], options?: object) =>
      handlerCreateNotice(content, 'error', options),
    success: (content: string | string[], options?: object) =>
      handlerCreateNotice(content, 'success', options),
    warring: (content: string | string[], options?: object) =>
      handlerCreateNotice(content, 'warring', options),
  }
})()

export { message }
