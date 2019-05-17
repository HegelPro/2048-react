import React from 'react'
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles'

import { styles } from './styles'

type ClassNames = WithStyles<typeof styles>

interface IProps extends ClassNames {
  children: React.ReactNode
}

const CellContainer = ({
  classes,
  children,
}: IProps) => (
  <form className={classes.root}>
    {children}
  </form>
)

export default withStyles(styles)(CellContainer)
