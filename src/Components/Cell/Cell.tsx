import * as Cell from '../../models/cell'
import * as O from 'fp-ts/Option'
import CellAnimation from '../../Containers/CellAnimation/CellAnimation'
import React from 'react'
import Typography from '@material-ui/core/Typography'
import { Vector } from '../../models/vector'
import { useStyles } from './styles'

export interface CellProps {
  cell: Cell.Cell;
  size: number;
  currentPosition: Vector;
  previousPosition: O.Option<Vector>;
}

const CellBoard = (props: CellProps) => {
  const classes = useStyles(props)
  const {
    size,
    cell,
    currentPosition,
    previousPosition
  } = props
  return (
    <CellAnimation
      size={size}
      currentPosition={currentPosition}
      previousPosition={previousPosition}
    >
      <div>
        <span className={classes.side} />
        <div className={classes.root}>
          <span className={classes.circle} />
          <Typography className={classes.value}>
            {cell.value}
          </Typography>
        </div>
      </div>
    </CellAnimation>
  )
}

export default CellBoard
