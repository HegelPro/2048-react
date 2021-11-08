import CssBaseline from '@material-ui/core/CssBaseline'
import { FpStateProvider } from '../../state/fpState'
import React from 'react'
import {Router} from 'react-router-dom'
import ThemeProvider from '@material-ui/styles/ThemeProvider'
import history from '../history'
import {theme} from '../theme'

interface IProps {
  children: React.ReactNode;
}

const Providers = ({ children }: IProps) => (
  <ThemeProvider theme={theme}>
    <FpStateProvider>
      <Router history={history}>
        <CssBaseline />
        {children}
      </Router>
    </FpStateProvider>
  </ThemeProvider>
)

export default Providers
