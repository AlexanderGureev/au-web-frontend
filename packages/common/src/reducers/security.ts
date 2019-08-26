// import storage from 'redux-persist/lib/storage'
// import { persistReducer } from 'redux-persist'
import { createReducer } from '@utils/reducer'
import * as actions from '../constants/security'

const initialState = {
  isAuth: false,
}

const reducer = createReducer(initialState, {
  [actions.auth]: (state, { isAuth }) => ({
    isAuth,
  }),
  [actions.logout]: () => initialState,
})

export default reducer

// export default persistReducer(
//   {
//     storage,
//     key: 'token',
//     keyPrefix: 'aunited',
//     version: 1,
//   },
//   reducer,
// )
