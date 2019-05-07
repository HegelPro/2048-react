import React from 'react'
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles'
import withWidth, { WithWidth } from '@material-ui/core/withWidth'

import { FieldSettingsRecord } from '../../models/settings'

import { styles } from './styles'
import { fieldSizes } from './config'

type ClassNames = WithStyles<typeof styles>

interface IProps extends ClassNames,
  WithWidth {
  children: React.ReactNode
  settings: FieldSettingsRecord
}

const Field = ({
  classes,
  children,
  settings,
  width,
}: IProps) => {
  const sizeStyle: React.CSSProperties = {
    width: fieldSizes[width],
    height: fieldSizes[width] / settings.columns * settings.rows,
  }
  return (
    <div className={classes.root} style={sizeStyle}>
      <div className={classes.background}>
        {children}
      </div>
    </div>
  )
}

export default withWidth()(withStyles(styles)(Field))
