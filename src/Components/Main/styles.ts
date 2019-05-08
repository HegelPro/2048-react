import { createStyles, Theme } from '@material-ui/core'

export const styles = (theme: Theme) => {
  const spacing = theme.spacing.unit * 4
  return createStyles({
    root: {
      paddingTop: spacing,
      paddingBottom: spacing,
    },
  })
}
