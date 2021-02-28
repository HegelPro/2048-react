import { Breakpoint } from '@material-ui/core/styles/createBreakpoints'
import Fab from '@material-ui/core/Fab'

export const fabSizes: Record<Breakpoint, React.ComponentProps<typeof Fab>['size']> = {
  xs: 'small',
  sm: 'small',
  md: 'medium',
  lg: 'medium',
  xl: 'large',
}
