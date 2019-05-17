import { createStyles, Theme } from '@material-ui/core'

export const styles = (theme: Theme) => {
  const borderWidth = 4
  return createStyles({
    root: {
      position: 'relative',
      backgroundColor: theme.palette.primary.main,
      padding: borderWidth,
      boxSizing: 'content-box',
      borderRadius: theme.shape.borderRadius * 4,
    },
    background: {
      position: 'relative',
      width: '100%',
      height: '100%',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      borderRadius: theme.shape.borderRadius * 4,
      overflow: 'hidden',
      background: theme.palette.background.default,
    },
  })
}
