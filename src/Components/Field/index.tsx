import React from 'react';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import { styles } from './styles';
import { FieldRecord } from '../../models/field';
import CellContainer from '../CellContainer';
import { Vector } from '../../models/vector';


type ClassNames = WithStyles<typeof styles>;

interface Props extends ClassNames {
  field: FieldRecord
  prevField?: FieldRecord
}

const Field = ({
  classes,
  field,
  prevField,
}: Props) => {
  return (
    <div className={classes.root}>
      {field.cells.map(cell => {
        let prevPosition: Vector | undefined
        const currentPosition = field.getCellPosition(cell)
        if(prevField) {
          prevPosition = prevField.getCellPosition(cell)
        }
        return (
          <div
            className={classes.spaceForCell}
            key={Math.random()}
            style={{ width: `${100 / field.columns}%` }}
          >
            <CellContainer
              cell={cell}
              position={currentPosition}
              prevPosition={prevPosition}
            />
          </div>
        )
      })}
    </div>
  )
}

export default withStyles(styles)(Field);