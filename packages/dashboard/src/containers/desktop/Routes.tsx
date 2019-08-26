import React, { useEffect } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { AuthDesktop as Auth } from '@au/auth'
import { ListDesktop as Users } from '@au/users'
import { useDispatch } from 'react-redux'
import App from './App'
import PrivateRoute from './PrivateRoute'
import { init } from '@au/dashboard/src/actions/init'
import Profile from './Profile'

const Routes = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(init())
  }, [])

  return (
    <Switch>
      <Route path='/auth' component={Auth} />
      <App>
        <Switch>
          <PrivateRoute path='/profile' component={Profile} />
          <PrivateRoute path='/' exact component={Users} />
        </Switch>
      </App>
    </Switch>
  )
}

export default Routes
