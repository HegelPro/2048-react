import { createStyles, Theme } from "@material-ui/core";

export const styles = (theme: Theme) =>
  createStyles({
    header: {
      height: 64,
      backgroundColor: theme.palette.primary.main,
    },
  });