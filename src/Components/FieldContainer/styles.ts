import { createStyles, Theme } from "@material-ui/core";

export const styles = (theme: Theme) => {
  const borderWidth = 4
  return createStyles({
    root: {
      position: 'relative',
      display: 'flex',
      flexWrap: 'wrap',
      padding: borderWidth,
    },
    border: {
      width: '100%',
      height: '100%',
      margin: -borderWidth,
      position: 'absolute',
      borderWidth,
      borderRadius: theme.shape.borderRadius * 4,
      borderColor: theme.palette.primary.dark,
      borderStyle: 'solid',
    }
  });
}