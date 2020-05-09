import React from 'react'

import { Vector } from '../../models/vector'

import { useStyles } from './styles'


interface IProps {
  children: React.ReactNode
  size: number
  currentPosition?: Vector
  previousPosition?: Vector
}

const CellContainer = ({
  size,
  children,
  currentPosition,
  previousPosition,
}: IProps) => {
  const classes = useStyles()

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

export default CellContainer
