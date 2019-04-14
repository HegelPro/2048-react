import { createStyles, Theme } from "@material-ui/core";

export const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    spaceForCell: {
      backgroundColor: theme.palette.grey[500],
    },
  });