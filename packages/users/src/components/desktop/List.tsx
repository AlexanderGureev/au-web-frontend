import React from 'react'
import { injectIntl, InjectedIntl } from 'react-intl'
import { Column, Layout, Row } from '@ui/layout'
import { Text } from '@ui/text'
import messages from '../../messages'
import Table from './Table'

interface Props {
  intl: InjectedIntl
  rows: any[]
}

const List = ({ rows, intl }: Props) => {
  return (
    <Column>
      <Layout basis={60} />
      <Row justify='center'>
        <Text weight='medium' size='l'>
          {intl.formatMessage(messages.users)}
        </Text>
      </Row>
      <Layout basis={60} />
      <Table list={rows} intl={intl} />
    </Column>
  )
}

export default injectIntl(List)
