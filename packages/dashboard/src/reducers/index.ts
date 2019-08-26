import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import security from '@au/common/src/reducers/security'
import auth from '@au/auth/src/reducers'
import users from '@au/users/src/reducers'
import config from './config'
import locale from './locale'
import me from './me'

export default combineReducers({
  auth,
  config,
  locale,
  me,
  router,
  security,
  users,
})
