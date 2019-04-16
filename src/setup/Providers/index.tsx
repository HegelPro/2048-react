import React from 'react'
import { StoreContext } from 'redux-react-hook'
import { MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { theme } from '../theme'
import { store } from '../../store';


interface Props {
  children: React.ReactNode
}

const Providers = ({ children }: Props) => (
  <MuiThemeProvider theme={theme}>
    <StoreContext.Provider value={store}>
      <CssBaseline />
      {children}
    </StoreContext.Provider>
  </MuiThemeProvider>
)

export default Providers