import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/es/integration/react'
import { Persistor } from 'redux-persist'
import { Store } from 'redux'
import { History } from 'history'
import { hot } from 'react-hot-loader'
import { Router } from 'react-router-dom'
import { ThemeProvider } from '@ui/theme'
import IntlProvider from '../IntlProvider'
import Routes from './Routes'

interface RootProps {
  history: History
  persistor?: Persistor
  store: Store
}

const Root = ({ store, persistor, history }: RootProps) => (
  <Provider store={store}>
    <IntlProvider>
      <ThemeProvider>
        <Router history={history}>
          {/* <Preload history={history}> */}
          <Routes />
          {/* </Preload> */}
        </Router>
      </ThemeProvider>
    </IntlProvider>
  </Provider>
)

export default hot(module)(Root)
