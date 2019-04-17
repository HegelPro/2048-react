import { createStyles, Theme } from "@material-ui/core";

export const styles = (theme: Theme) =>
  createStyles({
    root: {
      position: 'absolute',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      borderRadius: theme.shape.borderRadius * 4,
    },
    side: {
      display: 'block', 
      position: 'absolute',
      top: theme.spacing.unit / 2,
      width: '100%',
      height: '100%',
      background: `radial-gradient(ellipse at right, ${theme.palette.common.black}, transparent)`,
      borderRadius: theme.shape.borderRadius * 4,
    },
    circle: {
      position: 'absolute',
      borderRadius: '50%',
      width: '80%',
      height: '80%',
      background: `radial-gradient(ellipse at right, ${theme.palette.common.black}, transparent)`,
      opacity: 0.1,
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
    value: {},
  });