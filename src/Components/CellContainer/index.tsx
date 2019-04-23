import React, { useEffect } from 'react';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import { styles } from './styles';
import { CellRecord } from '../../models/cell';
import { Vector } from '../../models/vector';


type ClassNames = WithStyles<typeof styles>;

interface Props extends ClassNames {
  children: React.ReactNode
  cell: CellRecord
  currentPosition?: Vector
  previousPosition?: Vector
}

const CellContainer = ({
  classes,
  cell,
  children,
  currentPosition,
  previousPosition,
}: Props) => {
  useEffect(() => {
    const cellElem = document.getElementById(`cell_${cell.id}`)
    if(cellElem) {
      if(previousPosition) {
        cellElem.style.top = '0'
        cellElem.style.left = '0'
      } else {
        cellElem.style.transform = 'scale(1)'
      }
    }
  })
  let dx = 0
  let dy = 0
  if(previousPosition && currentPosition) {
    dx = (previousPosition.x - currentPosition.x)
    dy = (previousPosition.y - currentPosition.y)
  }
  return (
    <div
      id={`cell_${cell.id}`}
      className={classes.root}
      style={{
        top: `${100 * dy}%`,
        left: `${100 * dx}%`,
        transform: previousPosition
          ? ''
          : 'scale(0)'
      }}
    >
      {children}
    </div>
  )
}

export default withStyles(styles)(CellContainer);