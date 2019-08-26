import { createReducer } from '@utils/reducer'
import * as actions from '../constants/list'

const initialState = {
  rows: [],
  count: 0,
}

export default createReducer(initialState, {
  [actions.load]: (state, { list }) => ({ ...state, ...list }),
  [actions.change]: (state, { list }) => ({ ...state, rows: [...list] }),
  [actions.clear]: () => initialState,
})
