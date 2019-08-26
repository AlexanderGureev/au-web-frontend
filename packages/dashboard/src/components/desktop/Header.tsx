import React from 'react'
import { injectIntl, InjectedIntl } from 'react-intl'
import { Layout, Row } from '@ui/layout'
import { Header as HeaderBase } from '@ui/header'
import { Space, Text } from '@ui/text'
import { Link, PrimaryLink, RouteLink } from '@ui/link'
import messages from '../../messages'
import Avatar from '../../containers/desktop/Avatar'

interface Props {
  firstName?: string
  lastName?: string
  intl: InjectedIntl
  onLogout: () => void
  location?: object
}

const Header = ({ firstName, lastName, intl, onLogout, ...rest }: Props) => {
  return (
    <HeaderBase>
      <Row
        justify='space-between'
        align='center'
        padding={['10px 20px', '10px 70px', '10px 200px']}
      >
        <Layout>
          <RouteLink to='/' color='ebony' hoverColor='lightGray'>
            Home
          </RouteLink>
          <Space count={5} />
        </Layout>
        <Layout align='center'>
          <RouteLink to='/profile' color='ebony' hoverColor='lightGray'>
            <Avatar size={32} text={false} btn={false} enable={false} />
          </RouteLink>
          <Space count={5} />
          <PrimaryLink
            onClick={onLogout}
            size='s'
            weight='medium'
            hoverColor='blueBayoux'
          >
            {intl.formatMessage(messages.exit)}
          </PrimaryLink>
        </Layout>
      </Row>
    </HeaderBase>
  )
}
export default injectIntl(Header)
