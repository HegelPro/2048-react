import React from 'react'
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles'
import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'

import { styles } from './styles'
import * as strings from './strings'

type ClassNames = WithStyles<typeof styles>

interface IProps extends ClassNames {}

const Header = ({ classes }: IProps) => (
  <AppBar
    color='primary'
    position='static'
  >
    <Grid
      container
      justify='space-between'
      alignItems='center'
      className={classes.root}
    >
      <Grid item>
        <Typography
          className={classes.title}
          variant='h3'
          color='inherit'
        >{strings.title}</Typography>
      </Grid>
      <Grid item>
        <Typography
          className={classes.title}
          variant='caption'
          color='inherit'
        >{strings.copyright}</Typography>
      </Grid>
    </Grid>
  </AppBar>
)

export default withStyles(styles)(Header)
