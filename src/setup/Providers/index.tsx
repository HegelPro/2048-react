import React from 'react'
import { StoreContext } from 'redux-react-hook'
import { MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { theme } from '../theme'
import { store } from '../../store';
import { BrowserRouter } from 'react-router-dom';


interface Props {
  children: React.ReactNode
}

const Providers = ({ children }: Props) => (
  <MuiThemeProvider theme={theme}>
    <StoreContext.Provider value={store}>
      <BrowserRouter>
        <CssBaseline />
        {children}
      </BrowserRouter>
    </StoreContext.Provider>
  </MuiThemeProvider>
)

export default Providers