import React from "react";
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import { styles } from "./styles";
import { CellRecord } from "../../models/cell";


type ClassNames = WithStyles<typeof styles>;

interface Props extends ClassNames {
  cell: CellRecord
}

const Cell = ({
  classes,
  cell,
}: Props) => cell.value !== 0
  ? <div className={classes.root}>{Math.pow(2, cell.value)}</div>
  : null

export default withStyles(styles)(Cell);