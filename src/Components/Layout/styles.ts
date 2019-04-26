import { createStyles } from '@material-ui/core'

export const styles = () =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
    },
    content: {
      flex: '1 0 auto',
    },
    footer: {
      flex: '0 0 auto',
    },
  })
