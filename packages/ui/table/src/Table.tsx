import React, { useState, useEffect, useRef } from 'react'
import { AutoSizer, Column } from 'react-virtualized'
import moment from 'moment'
import { SortableContainer, SortableElement } from 'react-sortable-hoc'
import arrayMove from 'array-move'
import {
  TableItem,
  TableItemWrapper,
  StyledTable,
  TableWrapper,
} from './styles'
import { Empty } from '@ui/empty'

const SortableItem = SortableElement(({ value, className, style }) => (
  <TableItemWrapper style={style} className={className}>
    <TableItem>{value}</TableItem>
  </TableItemWrapper>
))

const TableComponent = ({
  items,
  intl,
  getRef,
  sort,
  sortBy,
  sortDirection,
  width,
  height,
}) => {
  const rowRenderer = ({ index, ...rest }) => {
    const { columns, ...props } = rest
    return (
      <SortableItem
        key={`item-${index}`}
        index={index}
        value={columns}
        {...props}
      />
    )
  }

  const rowGetter = ({ index }) => {
    const formatOptions = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    }
    const { registeredAt, lastLogonAt } = items[index]
    const registeredAtFormatted = intl.formatDate(registeredAt, formatOptions)
    const lastLogonAtFormatted = intl.formatDate(lastLogonAt, formatOptions)

    return {
      ...items[index],
      registeredAt: registeredAtFormatted,
      lastLogonAt: lastLogonAtFormatted,
    }
  }

  return (
    <StyledTable
      ref={getRef}
      width={width}
      height={height}
      headerHeight={70}
      rowHeight={70}
      rowCount={items.length}
      rowGetter={rowGetter}
      sort={sort}
      sortBy={sortBy}
      sortDirection={sortDirection}
      rowRenderer={rowRenderer}
    >
      <Column label='Id' dataKey='id' width={80} />
      <Column label='email' dataKey='email' width={200} />
      <Column label='Registered At' dataKey='registeredAt' width={200} />
      <Column label='Last Logon At' dataKey='lastLogonAt' width={200} />
    </StyledTable>
  )
}

const SortableTable = SortableContainer(TableComponent)

export const Table = ({ list, intl }) => {
  const SortDirections = { ASC: 'ASC', DESC: 'DESC' }

  const [sortBy, setSortBy] = useState('id')
  const [sortDirection, setSortDirection] = useState(SortDirections.ASC)
  const [items, setItems] = useState([])

  useEffect(() => {
    sort({
      sortBy: 'id',
      sortDirection: SortDirections.ASC,
      items: list,
    })
  }, [list.length])

  const tableRef = useRef(null)

  const registerListRef = listInstance => {
    tableRef.current = listInstance
  }

  const onChangeList = state => setItems(state)

  function sort(props) {
    const [...sortableItems] = props.items || items
    setSortBy(props.sortBy)
    setSortDirection(SortDirections[props.sortDirection])

    const comparator = (a, b) => (a < b ? -1 : a > b ? 1 : 0)

    if (props.sortDirection === SortDirections.ASC) {
      const sortedList = sortableItems.sort((a, b) => {
        if (props.sortBy !== 'id' && moment(a[props.sortBy]).isValid()) {
          return comparator(
            new Date(a[props.sortBy]).getTime(),
            new Date(b[props.sortBy]).getTime(),
          )
        }
        if (Number(a[props.sortBy])) {
          return comparator(Number(a[props.sortBy]), Number(b[props.sortBy]))
        } else {
          return comparator(a[props.sortBy], b[props.sortBy])
        }
      })
      onChangeList(sortedList)
    } else {
      onChangeList(sortableItems.reverse())
    }
  }

  const onSortEnd = ({ oldIndex, newIndex }) => {
    if (oldIndex === newIndex) {
      return
    }
    onChangeList(arrayMove(items, oldIndex, newIndex))
    tableRef.current.recomputeRowHeights()
    tableRef.current.forceUpdate()
  }

  return (
    <TableWrapper>
      <AutoSizer>
        {({ height, width }) => (
          <SortableTable
            height={height}
            width={width}
            sortBy={sortBy}
            sort={sort}
            sortDirection={sortDirection}
            getRef={registerListRef}
            items={items}
            intl={intl}
            onSortEnd={onSortEnd}
            helperClass='sortable-item'
            lockAxis='y'
            lockToContainerEdges={false}
            keyCodes={null} // temporarily
          />
        )}
      </AutoSizer>
      {!items.length && <Empty />}
    </TableWrapper>
  )
}
