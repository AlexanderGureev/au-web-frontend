import React from 'react'
import { injectIntl, InjectedIntl } from 'react-intl'
import { Layout, Row } from '@ui/layout'
import { Space, Text } from '@ui/text'
import messages from '../../messages'

interface Props {
  intl: InjectedIntl
}

const Footer = ({ intl }: Props) => (
  <>
    <Row justify='center'>
      <Layout />
      <Text size='s'>
        {'©'}
        <Space />
        {intl.formatDate(new Date(), { year: 'numeric' })}
        <Space />
        {intl.formatMessage(messages.copyright)}
      </Text>
    </Row>
    <Layout basis={20} />
  </>
)

export default injectIntl(Footer)
