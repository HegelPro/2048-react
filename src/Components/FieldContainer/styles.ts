import { createStyles, Theme } from '@material-ui/core'

export const styles = (theme: Theme) => {
  const borderWidth = 4
  return createStyles({
    root: {
      position: 'relative',
      backgroundColor: theme.palette.primary.dark,
      padding: borderWidth,
      // borderWidth,
      // borderStyle: 'solid',
      borderRadius: theme.shape.borderRadius * 4,
      // borderColor: theme.palette.primary.dark,
    },
    background: {
      borderRadius: theme.shape.borderRadius * 4,
      overflow: 'hidden',
      display: 'flex',
      flexWrap: 'wrap',
      backgroundColor: theme.palette.grey[500],
    },
  })
}
