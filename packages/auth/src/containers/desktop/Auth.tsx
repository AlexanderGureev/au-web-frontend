import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Login from '../../pages/login/containers/desktop/Login'
import Registration from '../../pages/registration/containers/desktop/Registration'
import { useSelector } from 'react-redux'

const Auth = () => {
  const isAuth = useSelector(state => state.security.isAuth)

  return isAuth ? (
    <Redirect to='/' />
  ) : (
    <Switch>
      <Route path='/auth/registration' component={Registration} />
      <Route path='/auth' component={Login} />
    </Switch>
  )
}

export default Auth
