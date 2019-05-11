import Fab from '@material-ui/core/Fab'
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints'

export const fabSizes: {
  [K in Breakpoint]: React.ComponentProps<typeof Fab>['size']
} = {
  xs: 'small',
  sm: 'small',
  md: 'medium',
  lg: 'medium',
  xl: 'large',
}
