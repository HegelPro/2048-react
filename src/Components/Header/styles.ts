import { createStyles, Theme } from '@material-ui/core'

export const styles = (theme: Theme) =>
  createStyles({
    root: {
      height: 64,
      backgroundColor: theme.palette.primary.main,
    },
  })
