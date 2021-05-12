import CellBlock from '../../Blocks/CellBlock/CellBlock'
import * as Cell from '../../models/cell'
import React from 'react'
import Typography from '@material-ui/core/Typography'
import { Vector } from '../../models/vector'
import { useStyles } from './styles'

export interface CellProps {
  cell: Cell.Cell
  size: number
  currentPosition: Vector
  // previousPosition: Maybe<Vector>
}

const CellBoard = (props: CellProps) => {
  const classes = useStyles(props)
  const {
    size,
    cell,
    currentPosition,
    // previousPosition,
  } = props

  const [x, y] = currentPosition

  return (
    // <CellBlock
    //   size={size}
    //   currentPosition={currentPosition}
    //   previousPosition={previousPosition}
    // >
    <div style={{
      top: `${size * y}px`,
      left: `${size * x}px`,
      width: `${size}px`,
      height: `${size}px`,
      position: 'absolute',
    }}>
      <span className={classes.side} />
      <div className={classes.root}>
        <span className={classes.circle} />
        <Typography className={classes.value}>
          {cell.value}
        </Typography>
      </div>
    </div>
    // </CellBlock>
  )
}

export default CellBoard
