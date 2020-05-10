import React, { useRef, useEffect } from 'react'
import withWidth, { WithWidth } from '@material-ui/core/withWidth'

import { FieldSettingsRecord } from '../../models/settings'

import { useStyles } from './styles'
import { fieldSizes } from './config'


interface IProps extends
WithWidth {
  children: React.ReactNode
  settings: FieldSettingsRecord
}

const Field = ({
  children,
  settings,
  width,
}: IProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const classes = useStyles()
  const sizeStyle: React.CSSProperties = {
    width: settings.columns > settings.rows
      ? fieldSizes[width]
      : fieldSizes[width] / settings.rows * settings.columns,
    height: settings.columns > settings.rows
      ? fieldSizes[width] / settings.columns * settings.rows
      : fieldSizes[width],
  }

  useEffect(() => {
    if (ref.current) {
      ref.current.onselectstart = () => false
    }
  })

  return (
    <div
      ref={ref}
      className={classes.root}
      style={sizeStyle}
    >
      <div className={classes.background}>
        {children}
      </div>
    </div>
  )
}

export default withWidth()(Field)
