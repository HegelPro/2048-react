import { createStyles, Theme } from "@material-ui/core";

export const styles = (theme: Theme) =>
  createStyles({
    root: {
      position: 'relative',
      top: 0,
      left: 0,
      height: 0,
      width: '100%',
      paddingBottom: '100%',
      transition: '0.1s top, 0.1s left, 0.2s transform',
    }
  });