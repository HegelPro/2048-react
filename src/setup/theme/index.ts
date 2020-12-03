import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import grey from '@material-ui/core/colors/grey'

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3ea09f',
    },
    background: {
      default: grey[200],
    },
  },
})
