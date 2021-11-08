import React, { useEffect, useRef } from 'react'
import * as O from 'fp-ts/Option'
import {pipe} from 'fp-ts/function'
import { Theme } from '@material-ui/core'
import * as Vector from '../../models/vector'
import makeStyles from '@material-ui/core/styles/makeStyles'

interface CellBlockProps {
  children: React.ReactNode
  size: number
  currentPosition: Vector.Vector
  previousPosition: O.Option<Vector.Vector>
}

const useStyles = makeStyles<Theme, CellBlockProps>(() => ({
  root: ({size}) => ({
    width: `${size}px`,
    height: `${size}px`,
    position: 'absolute',
    transition: '0.2s top, 0.2s left, 0.3s transform',
  }),
}))

const createPositionStyles = (
  size: number,
  currentPosition: Vector.Vector,
  previousPosition: O.Option<Vector.Vector>,
): React.CSSProperties =>
  pipe(
    previousPosition,
    O.map(([x, y]) => ({
        // top: `${size * y}px`,
        // left: `${size * x}px`,
        top: `${size * currentPosition[1]}px`,
        left: `${size * currentPosition[0]}px`,
    })),
    O.getOrElse(() => ({
        top: `${size * currentPosition[1]}px`,
        left: `${size * currentPosition[0]}px`,
        // transform: 'scale(0)',
    }) as React.CSSProperties)
  )

const CellAnimation = (props: CellBlockProps) => {
  const {
    size,
    children,
    currentPosition,
    previousPosition,
  } = props

  const classes = useStyles(props)
  const ref = useRef<HTMLDivElement>(null)

  const positionStyles: React.CSSProperties = createPositionStyles(size, currentPosition, previousPosition)

  useEffect(() => {
    setTimeout(() => {
        pipe(
            ref.current,
            O.fromNullable,
            O.map(cellRef => {
              cellRef.style.top = `${size * currentPosition[1]}px`
              cellRef.style.left = `${size * currentPosition[0]}px`

                if (O.isSome(previousPosition)) {
                  // cellRef.style.top = `${size * currentPosition[1]}px`
                  // cellRef.style.left = `${size * currentPosition[0]}px`
                } else {
                  // cellRef.style.transform = 'scale(1)'
                }
            })
        )
    }, 0)
  }, [currentPosition, previousPosition, size])

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

export default CellAnimation
