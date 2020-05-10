import Typography from '@material-ui/core/Typography'
import React from 'react'

import { CellRecord } from '../../models/cell'
import { Vector } from '../../models/vector'
import CellBlock from '../../Blocks/CellBlock'

import { useStyles } from './styles'

export interface CellProps {
  cell: CellRecord
  size: number
  currentPosition?: Vector
  previousPosition?: Vector
}

const Cell = (props: CellProps) => {
  const classes = useStyles(props)
  const {
    size,
    cell,
    currentPosition,
    previousPosition,
  } = props
  return (
    <CellBlock
      size={size}
      currentPosition={currentPosition}
      previousPosition={previousPosition}
    >
      <span className={classes.side} />
      <div className={classes.root}>
        <span className={classes.circle} />
        <Typography className={classes.value}>
          {cell.getValue()}
        </Typography>
      </div>
    </CellBlock>
  )
}

export default Cell
