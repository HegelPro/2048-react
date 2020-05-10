import Typography from '@material-ui/core/Typography'
import React from 'react'

import { CellRecord } from '../../models/cell'
import { Vector } from '../../models/vector'
import CellContainer from '../CellContainer'

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
    <CellContainer
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
    </CellContainer>
  )
}

export default Cell
