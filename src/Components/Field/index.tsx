import React from "react";
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import { styles } from "./styles";
import { FieldRecord } from "../../models/field";
import Cell from "../../Components/Cell";


type ClassNames = WithStyles<typeof styles>;

interface Props extends ClassNames {
  field: FieldRecord
}

const Field = ({
  classes,
  field,
}: Props) => (
  <div className={classes.root}>
    {field.cells.map(cell =>
      <div
        key={cell.id}
        style={{ width: `${100 / field.columns}%` }}
      >
        <Cell
          value={cell.value}
        />
      </div>
    )}
  </div>
)

export default withStyles(styles)(Field);