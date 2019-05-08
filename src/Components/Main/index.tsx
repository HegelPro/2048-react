import React from 'react'
import {
  Route,
  Switch,
} from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles'

import Field from '../../Containers/Game'
import Settings from '../../Containers/Settings'

import { styles } from './styles'

type ClassNames = WithStyles<typeof styles>

interface IProps extends ClassNames {}

const Main = ({ classes }: IProps) => (
  <Grid
    container
    className={classes.root}
    justify='center'
  >
    <Grid item>
      <Switch>
        <Route exact path='/'>
          <Field />
        </Route>
        <Route exact path='/settings'>
          <Settings />
        </Route>
      </Switch>
    </Grid>
  </Grid>
)

export default withStyles(styles)(Main)
