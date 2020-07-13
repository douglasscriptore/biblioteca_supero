import React from 'react'
import { PersistGate } from 'redux-persist/es/integration/react'
import { Router } from 'react-router-dom'

import { Provider } from 'react-redux'
import './config/ReactotronConfig'

import history from './services/history'
// precisa vir dps do reactotron se não as configurações não vem p/ o store
import { store, persistor } from './store'

import ThemeProvider from './ThemeProvider'

import Routes from './routes'

import Dialog from './components/Dialog'
import GlobalStyle, { ToastContainer } from './styles/global'

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <ThemeProvider>
            <Routes />
            <GlobalStyle />
            <ToastContainer autoClose={3000} />
            <Dialog id="dialog_id" />
          </ThemeProvider>
        </Router>
      </PersistGate>
    </Provider>
  )
}

export default App
