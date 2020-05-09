import React from 'react'

import withTheme, { WithTheme } from '@material-ui/core/styles/withTheme'
import Typography from '@material-ui/core/Typography'
import { useStyles } from './styles'
import { selectCellColor } from './utils'

import { CellRecord } from '../../models/cell'
import { Vector } from '../../models/vector'
import CellContainer from '../CellContainer'

interface IProps extends
WithTheme {
  cell: CellRecord
  size: number
  currentPosition?: Vector
  previousPosition?: Vector
}

const Cell = ({
  size,
  cell,
  currentPosition,
  previousPosition,
  theme,
}: IProps) => {
  const classes = useStyles()
  const cellColor = selectCellColor(cell.value)
  return (
    <CellContainer
      size={size}
      currentPosition={currentPosition}
      previousPosition={previousPosition}
    >
      <span
        className={classes.side}
        style={{ backgroundColor: cellColor }}
      />
      <div
        className={classes.root}
        style={{ backgroundColor: cellColor }}
      >
        <span className={classes.circle} />
        <Typography
          className={classes.value}
          style={{ color: theme.palette.getContrastText(cellColor) }}
        >
          {cell.getValue()}
        </Typography>
      </div>
    </CellContainer>
  )
}

export default withTheme(Cell)
