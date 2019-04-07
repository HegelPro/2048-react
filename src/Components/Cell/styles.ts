import { createStyles, Theme } from "@material-ui/core";

export const styles = (theme: Theme) =>
  createStyles({
    root: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      backgroundColor: theme.palette.secondary.main,
      borderRadius: theme.shape.borderRadius * 4,
    },
  });