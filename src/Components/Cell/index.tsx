import React from "react";
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import { styles } from "./styles";


type ClassNames = WithStyles<typeof styles>;

interface Props extends ClassNames {
  value: number
}

const Cell = ({
  classes,
  value,
}: Props) => (
  <div className={classes.root}>
    {value === 0 ? 0 : Math.pow(2, value)}
  </div>
)

export default withStyles(styles)(Cell);