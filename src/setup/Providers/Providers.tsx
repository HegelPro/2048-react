import {
  addMoveCellsHandlersFromKeydown,
  addMoveCellsHandlersFromMouse,
  addMoveCellsHandlersFromTouch,
  addReturnFieldHandlersFromKeydown,
} from '../globalEvents/eventHandlers'
import CssBaseline from '@material-ui/core/CssBaseline'
import {Provider} from 'react-redux'
import React from 'react'
import {Router} from 'react-router-dom'
import ThemeProvider from '@material-ui/styles/ThemeProvider'
import history from '../history'
import {store} from '../../store/store'
import {theme} from '../theme'

// Add global event handlers
addMoveCellsHandlersFromKeydown()
addMoveCellsHandlersFromMouse()
addMoveCellsHandlersFromTouch()
addReturnFieldHandlersFromKeydown()

interface IProps {
  children: React.ReactNode,
}

const Providers = ({ children }: IProps) => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
        <Router history={history}>
          <CssBaseline />
          {children}
        </Router>
    </Provider>
  </ThemeProvider>
)

export default Providers
