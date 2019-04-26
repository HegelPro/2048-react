import React from 'react'
import { StoreContext } from 'redux-react-hook'
import { MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { theme } from '../theme'
import { store } from '../../store'
import { Router } from 'react-router-dom'
import history from '../history'

interface IProps {
  children: React.ReactNode,
}

const Providers = ({ children }: IProps) => (
  <MuiThemeProvider theme={theme}>
    <StoreContext.Provider value={store}>
      <Router history={history}>
        <CssBaseline />
        {children}
      </Router>
    </StoreContext.Provider>
  </MuiThemeProvider>
)

export default Providers
