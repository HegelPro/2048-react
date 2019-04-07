import { createStyles, Theme } from "@material-ui/core";

export const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    spaceForCell: {
      backgroundColor: theme.palette.grey[500],
      // borderColor: theme.palette.grey[700],
      // borderWidth: 1,
      // borderStyle: 'solid'
    },
    cellSize: {
      position: 'relative',
      top: 0,
      left: 0,
      height: 0,
      width: '100%',
      paddingBottom: '100%',
      transition: '0.1s top, 0.1s left',
    }
  });