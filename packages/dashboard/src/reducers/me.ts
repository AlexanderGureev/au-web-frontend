import { createReducer } from '@utils/reducer'
import * as actions from '../constants/me'

const DEFAULT_AVATAR = 'ava_default.png'

const initialState = {
  id: '',
  email: '',
  profile: {
    firstName: '',
    lastName: '',
    avatarPath: DEFAULT_AVATAR,
  },
}

export default createReducer(initialState, {
  [actions.load]: (state, { user }) => ({ ...state, ...user }),
  [actions.change]: (state, { user }) => ({ ...state, ...user }),
  [actions.changeProfile]: (state, { profile }) => ({
    ...state,
    profile,
  }),
  [actions.clear]: () => initialState,
})
