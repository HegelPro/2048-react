import React from 'react';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import { styles } from './styles';
import { CellRecord } from '../../models/cell';
import { Vector } from '../../models/vector';
import CellContainer from '../CellContainer';
import { selectCellColor } from './utils';


type ClassNames = WithStyles<typeof styles>;

interface Props extends ClassNames {
  cell: CellRecord
  position?: Vector
  prevPosition?: Vector
}

const Cell = ({
  classes,
  cell,
  position,
  prevPosition,
}: Props) => (
  <CellContainer
    cell={cell}
    position={position}
    prevPosition={prevPosition}
  >
    {cell.value !== 0
      ? (
        <div
          className={classes.root}
          style={{
            backgroundColor: selectCellColor(cell.value),
          }}
        >
          {Math.pow(2, cell.value)}
        </div>
      )
      : null
    }
  </CellContainer>
)
export default withStyles(styles)(Cell);