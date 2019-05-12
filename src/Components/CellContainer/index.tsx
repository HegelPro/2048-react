import React from 'react'
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles'

import { VectorRecord } from '../../models/vector'

import { styles } from './styles'

type ClassNames = WithStyles<typeof styles>

interface IProps extends ClassNames {
  children: React.ReactNode
  size: number
  currentPosition?: VectorRecord
  previousPosition?: VectorRecord
}

const CellContainer = ({
  classes,
  size,
  children,
  currentPosition,
  previousPosition,
}: IProps) => {
  let positionStyles: React.CSSProperties = {}
  if (currentPosition && previousPosition) {
    positionStyles = {
      top: `${size * previousPosition.y}px`,
      left: `${size * previousPosition.x}px`,
    }
  }
  if (currentPosition && !previousPosition) {
    positionStyles = {
      top: `${size * currentPosition.y}px`,
      left: `${size * currentPosition.x}px`,
      transform: 'scale(0)',
    }
  }
  return (
    <div
      ref={(el) => {
        setTimeout(() => {
          if (el) {
            if (currentPosition) {
              el.style.top = `${size * currentPosition.y}px`
              el.style.left = `${size * currentPosition.x}px`
            }
            if (!previousPosition) {
              el.style.transform = 'scale(1)'
            }
          }
        }, 0)
      }}
      className={classes.root}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        ...positionStyles,
      }}
    >
      {children}
    </div>
  )
}

export default withStyles(styles)(CellContainer)
