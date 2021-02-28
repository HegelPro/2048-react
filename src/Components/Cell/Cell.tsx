import CellBlock from '../../Blocks/CellBlock/CellBlock'
import { CellRecord } from '../../models/cell/schema'
import CellRecordHelper from '../../models/cell/helpers'
import { Maybe } from 'purify-ts'
import React from 'react'
import Typography from '@material-ui/core/Typography'
import { Vector } from '../../models/vector/schema'
import { useStyles } from './styles'

export interface CellProps {
  cell: CellRecord
  size: number
  currentPosition: Maybe<Vector>
  previousPosition: Maybe<Vector>
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
          {CellRecordHelper.getViewValue(cell)}
        </Typography>
      </div>
    </CellBlock>
  )
}

export default Cell
