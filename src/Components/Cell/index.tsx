import React from 'react';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import { styles } from './styles';
import { CellRecord } from '../../models/cell';
import { Vector } from '../../models/vector';
import CellContainer from '../CellContainer';
import { selectCellColor } from './utils';
import Typography from '@material-ui/core/Typography';
import withTheme, { WithTheme } from '@material-ui/core/styles/withTheme';

type ClassNames = WithStyles<typeof styles>;

interface Props extends ClassNames,
WithTheme {
  cell: CellRecord
  position?: Vector
  prevPosition?: Vector
}

const Cell = ({
  classes,
  cell,
  position,
  prevPosition,
  theme,
}: Props) => {
  const cellColor = selectCellColor(cell.value)
  return (
    <CellContainer
      cell={cell}
      position={position}
      prevPosition={prevPosition}
    >
      {cell.value !== 0
        ? (
          <div>
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
                style={{
                  color: theme.palette.getContrastText(cellColor)
                }}
              >
                {Math.pow(2, cell.value)}
              </Typography>
            </div>
          </div>
        )
        : null
      }
    </CellContainer>
  )
}

export default withTheme()(withStyles(styles)(Cell));