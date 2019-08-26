import React from 'react'
import { Empty, EmptyContainer, Text } from './styles'
import emptyIcon from './img/empty-box.svg'

const EmptyComponent = props => (
  <EmptyContainer>
    <Empty src={emptyIcon} />
    <Text>Empty list</Text>
  </EmptyContainer>
)

export default EmptyComponent
