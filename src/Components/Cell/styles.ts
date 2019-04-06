import { createStyles, Theme } from "@material-ui/core";

export const styles = (theme: Theme) =>
  createStyles({
    root: {
      height: 0,
      width: '100%',
      paddingBottom: '100%',
      backgroundColor: theme.palette.secondary.main,
    },
  });