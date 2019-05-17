import { createMuiTheme } from '@material-ui/core/styles'
import blue from '@material-ui/core/colors/blue'
import grey from '@material-ui/core/colors/grey'

export const theme = createMuiTheme({
  palette: {
    primary: {
      ...blue,
      main: '#3ea09f', // TODO color switched
    },
    background: {
      default: grey[200],
    },
  },
})
