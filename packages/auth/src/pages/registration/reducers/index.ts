import { createReducer } from '@utils/reducer'
import * as actions from '../constants'

interface Errors {
  email?: string
  password?: string
  confirmPassword?: string
}

interface State {
  email: string
  password: string
  confirmPassword: string
  errors: Errors
}

const initialState: State = {
  email: '',
  password: '',
  confirmPassword: '',
  errors: {},
}

export default createReducer(initialState, {
  [actions.change]: (state, { field, value, errors }) => {
    return {
      ...state,
      [field]: value,
      errors: {
        ...state.errors,
        ...errors,
      },
    }
  },
  [actions.setErrors]: (state, { errors }) => ({ ...state, errors }),
  [actions.clear]: () => initialState,
})
