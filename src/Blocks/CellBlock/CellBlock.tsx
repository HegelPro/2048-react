import { Theme } from '@material-ui/core'
import makeStyles from '@material-ui/core/styles/makeStyles'
import React, { useRef, useEffect } from 'react'

import { Vector } from '../../models/vector'

interface CellBlockProps {
  children: React.ReactNode
  size: number
  currentPosition?: Vector
  previousPosition?: Vector
}

const useStyles = makeStyles<Theme, CellBlockProps>(() => ({
  root: ({size}) => ({
    width: `${size}px`,
    height: `${size}px`,
    position: 'absolute',
    transition: '0.2s top, 0.2s left, 0.3s transform',
  }),
}))

const CellBlock = (props: CellBlockProps) => {
  const {
    size,
    children,
    currentPosition,
    previousPosition,
  } = props

  const classes = useStyles(props)
  const ref = useRef<HTMLDivElement>(null)

  let positionStyles: React.CSSProperties = {}

  if (currentPosition) {
    if (previousPosition) {
      positionStyles = ({
        top: `${size * previousPosition.y}px`,
        left: `${size * previousPosition.x}px`,
      })
    } else {
      positionStyles = ({
        top: `${size * currentPosition.y}px`,
        left: `${size * currentPosition.x}px`,
        transform: 'scale(0)',
      })
    }
  }

  useEffect(() => {
    setTimeout(() => {
      if (currentPosition && ref.current) {
        if (previousPosition) {
          ref.current.style.top = `${size * currentPosition.y}px`
          ref.current.style.left = `${size * currentPosition.x}px`
        } else {
          ref.current.style.transform = 'scale(1)'
        }
      }
    }, 0)
  })

  return (
      <div
        ref={ref}
        style={positionStyles}
        className={classes.root}
      >
        {children}
      </div>
  )
}

export default CellBlock
