import { Theme } from '@material-ui/core'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { Maybe } from 'purify-ts'
import React, { useRef, useEffect } from 'react'

import { Vector } from '../../models/vector/schema'

interface CellBlockProps {
  children: React.ReactNode
  size: number
  currentPosition: Maybe<Vector>
  previousPosition: Maybe<Vector>
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

  const positionStyles: React.CSSProperties = previousPosition
    .map<React.CSSProperties>(prevPosition => ({
      top: `${size * prevPosition.y}px`,
      left: `${size * prevPosition.x}px`,
    }))
    .alt(currentPosition
      .map(curPosition => ({
        top: `${size * curPosition.y}px`,
        left: `${size * curPosition.x}px`,
        transform: 'scale(0)',
      }))
    )
    .orDefault({})

  useEffect(() => {
    setTimeout(() => {
      Maybe.fromNullable(ref.current)
        .ifJust(cellRef => currentPosition
          .ifJust(extCur => previousPosition
            .ifJust(() => {
              cellRef.style.top = `${size * extCur.y}px`
              cellRef.style.left = `${size * extCur.x}px`
            })
            .ifNothing(() => {
              cellRef.style.transform = 'scale(1)'
            })
          )
        )
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
