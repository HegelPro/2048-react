import React from 'react'
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles'
import { styles } from './styles'
import { FieldRecord } from '../../models/field'
import FieldContainer from '../FieldContainer'
import { Vector } from '../../models/vector'
import Cell from '../Cell'

type ClassNames = WithStyles<typeof styles>

interface IProps extends ClassNames {
  field: FieldRecord
  prevField?: FieldRecord
}

const Field = ({
  classes,
  field,
  prevField,
}: IProps) => (
  <FieldContainer>
    {field.cells.map((cell) => {
      let previousPosition: Vector | undefined
      const currentPosition = field.getCellPosition(cell)
      if (prevField) {
        previousPosition = prevField.getCellPosition(cell)
      }
      return (
        <div
          className={classes.spaceForCell}
          key={Math.random()}
          style={{ width: `${100 / field.columns}%` }}
        >
          <Cell
            cell={cell}
            currentPosition={currentPosition}
            previousPosition={previousPosition}
          />
        </div>
      )
    })}
  </FieldContainer>
)

export default withStyles(styles)(Field)
