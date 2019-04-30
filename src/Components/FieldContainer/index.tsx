import React from 'react'
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles'
import withWidth, { WithWidth } from '@material-ui/core/withWidth'

import { styles } from './styles'
import { fieldSizes } from './config'

type ClassNames = WithStyles<typeof styles>

interface IProps extends ClassNames,
  WithWidth {
  children: React.ReactNode
}

const Field = ({
  classes,
  children,
  width,
}: IProps) => {
  const sizeStyle: React.CSSProperties = {
    width: fieldSizes[width],
    height: fieldSizes[width],
  }
  return (
    <div className={classes.root} style={sizeStyle}>
      {children}
      <div className={classes.border} />
    </div>
  )
}

export default withWidth()(withStyles(styles)(Field))
