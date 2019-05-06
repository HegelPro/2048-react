import React from 'react'
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles'

import { VectorRecord } from '../../models/vector'

import { styles } from './styles'

type ClassNames = WithStyles<typeof styles>

interface IProps extends ClassNames {
  children: React.ReactNode
  currentPosition?: VectorRecord
  previousPosition?: VectorRecord
}

const CellContainer = ({
  classes,
  children,
  currentPosition,
  previousPosition,
}: IProps) => {
  let dx = 0
  let dy = 0
  if (previousPosition && currentPosition) {
    dx = (previousPosition.x - currentPosition.x)
    dy = (previousPosition.y - currentPosition.y)
  }
  return (
    <div
      ref={(el) => {
        setTimeout(() => {
          if (el) {
            if (previousPosition) {
              el.style.top = '0'
              el.style.left = '0'
            } else {
              el.style.transform = 'scale(1)'
            }
          }
        }, 0)
      }}
      className={classes.root}
      style={{
        top: `${100 * dy}%`,
        left: `${100 * dx}%`,
        transform: previousPosition
          ? ''
          : 'scale(0)',
      }}
    >
      {children}
    </div>
  )
}

export default withStyles(styles)(CellContainer)
