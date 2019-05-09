import { createMuiTheme } from '@material-ui/core/styles'
import blue from '@material-ui/core/colors/blue'
import { grey } from '@material-ui/core/colors';

export const theme = createMuiTheme({
  palette: {
    primary: blue,
    background: {
      default: grey[200],
    },
  },
  typography: {
    useNextVariants: true,
  },
})
