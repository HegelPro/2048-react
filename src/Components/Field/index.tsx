import React from 'react';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import { styles } from './styles';
import { FieldRecord } from '../../models/field';
import FieldContainer from '../FieldContainer';
import { Vector } from '../../models/vector';
import Cell from '../Cell';


type ClassNames = WithStyles<typeof styles>;

interface Props extends ClassNames {
  field: FieldRecord
  prevField?: FieldRecord
}

const Field = ({
  classes,
  field,
  prevField,
}: Props) => (
  <FieldContainer field={field}>
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
          <Cell
            cell={cell}
            position={currentPosition}
            prevPosition={prevPosition}
          />
        </div>
      )
    })}
  </FieldContainer>
)

export default withStyles(styles)(Field);