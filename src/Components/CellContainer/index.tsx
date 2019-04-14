import React, { useEffect } from 'react';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import { styles } from './styles';
import { CellRecord } from '../../models/cell';
import Cell from '../../Components/Cell';
import { Vector } from '../../models/vector';


type ClassNames = WithStyles<typeof styles>;

interface Props extends ClassNames {
  cell: CellRecord
  position?: Vector
  prevPosition?: Vector
}

const CellContainer = ({
  classes,
  cell,
  position,
  prevPosition,
}: Props) => {
  useEffect(() => {
    const cellElem = document.getElementById(`cell_${cell.id}`)
    if(cellElem) {
      if(prevPosition) {
        cellElem.style.top = '0'
        cellElem.style.left = '0'
      } else {
        cellElem.style.transform = 'scale(1)'
      }
    }
  })
  let dx = 0
  let dy = 0
  if(prevPosition && position) {
    dx = (prevPosition.x - position.x)
    dy = (prevPosition.y - position.y)
  }
  return (
    <div
      id={`cell_${cell.id}`}
      className={classes.root}
      style={{
        top: `${100 * dy}%`,
        left: `${100 * dx}%`,
        transform: prevPosition
          ? ''
          : 'scale(0)'
      }}
    >
      <Cell cell={cell} />
    </div>
  )
}

export default withStyles(styles)(CellContainer);