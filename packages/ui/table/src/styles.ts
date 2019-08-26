import styled from '@emotion/styled'
import { Table as TableVirtualized } from 'react-virtualized'

export const StyledTable = styled(TableVirtualized)`
  .ReactVirtualized__Grid {
    outline: none;
  }
  .ReactVirtualized__Table__headerRow {
    display: flex;
    justify-content: space-around;
    background-color: #ffffff;
    box-shadow: 0 2px 4px 0 rgba(131, 144, 173, 0.15);
    text-align: center;
    @media (max-width: 680px) {
      font-size: 12px;
    }

    .ReactVirtualized__Table__headerColumn.ReactVirtualized__Table__sortableHeaderColumn {
      transition: 0.3s ease;
      :hover {
        color: rgba(0, 0, 0, 0.6);
      }
      cursor: pointer;
      outline: none;
    }
  }
`

export const TableItemWrapper = styled.div`
  :not(:last-child) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 680px) {
    font-size: 12px;
  }
`

export const TableItem = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  transition: 0.3s ease;
  text-align: center;
  cursor: pointer;

  :hover {
    background-color: rgba(0, 0, 0, 0.03);
  }
`
export const TableWrapper = styled.div`
  width: 100%;
  height: 80%;
`
