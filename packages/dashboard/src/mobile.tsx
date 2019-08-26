import React from 'react'
import { render } from 'react-dom'
import { createBrowserHistory as createHistory } from 'history'
import Root from './containers/desktop/Root'
import { configureStore } from './store'
import './index.css'
import 'react-virtualized/styles.css'

const history = createHistory()
const { store } = configureStore({}, history)

render(
  <Root store={store} history={history} />,
  document.getElementById('app'),
)
