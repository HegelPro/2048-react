import React from 'react'

import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles'
import withTheme, { WithTheme } from '@material-ui/core/styles/withTheme'
import Typography from '@material-ui/core/Typography'
import { styles } from './styles'
import { selectCellColor } from './utils'

import { CellRecord } from '../../models/cell'
import { VectorRecord } from '../../models/vector'
import CellContainer from '../CellContainer'

type ClassNames = WithStyles<typeof styles>

interface IProps extends ClassNames,
WithTheme {
  cell: CellRecord
  currentPosition?: VectorRecord
  previousPosition?: VectorRecord
}

const Cell = ({
  classes,
  cell,
  currentPosition,
  previousPosition,
  theme,
}: IProps) => {
  const cellColor = selectCellColor(cell.value)
  return (
    <CellContainer
      currentPosition={currentPosition}
      previousPosition={previousPosition}
    >
      {cell.value !== 0
        ? (
          <>
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
          </>
        )
        : null
      }
    </CellContainer>
  )
}

export default withTheme()(withStyles(styles)(Cell))
