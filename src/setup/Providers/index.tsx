import React from 'react'
import { Router } from 'react-router-dom'
import { StoreContext } from 'redux-react-hook'
import { ThemeProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import { theme } from '../theme'
import { store } from '../../store'
import history from '../history'

interface IProps {
  children: React.ReactNode,
}

const Providers = ({ children }: IProps) => (
  <ThemeProvider theme={theme}>
    <StoreContext.Provider value={store}>
      <Router history={history}>
        <CssBaseline />
        {children}
      </Router>
    </StoreContext.Provider>
  </ThemeProvider>
)

export default Providers
