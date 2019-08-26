import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'

interface NoticeIconProps {
  src: string
}

const NoticeFadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`
const NoticeFadeOut = keyframes`
0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`

export const NoticeIcon = styled('div')<NoticeIconProps>(
  {
    width: '15px',
    height: '15px',
    marginRight: '10px',
    marginTop: '2px',
  },
  props => ({
    background: `url(${props.src})`,
  }),
)

export const NotificationContainer = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  pointer-events: none;
`
export const NoticeContainer = styled.div`
  margin: 5px 0;
  background: #fff;
  color: #39393a;
  width: max-content;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 10px 20px;
  transition: 0.5s ease;
  pointer-events: all;
  display: flex;
  align-items: center;

  &.fade-enter {
    opacity: 0;
    animation-duration: 0.3s;
    animation-fill-mode: both;
    animation-timing-function: cubic-bezier(0.55, 0, 0.55, 0.2);
    animation-play-state: paused;
  }

  &.fade-leave {
    animation-duration: 0.3s;
    animation-fill-mode: both;
    animation-timing-function: cubic-bezier(0.55, 0, 0.55, 0.2);
    animation-play-state: paused;
  }

  &.fade-enter.fade-enter-active {
    animation-name: ${NoticeFadeIn};
    animation-play-state: running;
  }

  &.fade-leave.fade-leave-active {
    animation-name: ${NoticeFadeOut};
    animation-play-state: running;
  }
`

export const NoticeContent = styled.div``
export const NoticeText = styled.p``
