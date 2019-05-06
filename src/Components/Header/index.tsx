import React from 'react'
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles'
import { Typography, AppBar } from '@material-ui/core'

import { styles } from './styles'
import * as strings from './strings'

type ClassNames = WithStyles<typeof styles>

interface IProps extends ClassNames {}

const Header = ({ classes }: IProps) => (
  <AppBar
    color='primary'
    position='static'
    className={classes.root}
  >
    <Typography variant='title'>{strings.title}</Typography>
    <Typography>{strings.copyright}</Typography>
  </AppBar>
)

export default withStyles(styles)(Header)
