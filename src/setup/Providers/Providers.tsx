import CssBaseline from '@material-ui/core/CssBaseline'
import React from 'react'
import {Router} from 'react-router-dom'
import { StateProvider } from '../../state/fpState'
import ThemeProvider from '@material-ui/styles/ThemeProvider'
import history from '../history'
import {theme} from '../theme'

interface IProps {
  children: React.ReactNode,
}

const Providers = ({ children }: IProps) => (
  <ThemeProvider theme={theme}>
    <StateProvider>
      <Router history={history}>
        <CssBaseline />
        {children}
      </Router>
    </StateProvider>
  </ThemeProvider>
)

export default Providers
