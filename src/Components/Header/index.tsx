import React from 'react'
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles'
import { Typography } from '@material-ui/core'

import { styles } from './styles'

type ClassNames = WithStyles<typeof styles>

interface IProps extends ClassNames {}

const Header = ({ classes }: IProps) => (
  <div className={classes.root}>
    <Typography>Header</Typography>
  </div>
)

export default withStyles(styles)(Header)
