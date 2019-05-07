import React from 'react'
import {
  Route,
  Switch,
} from 'react-router-dom'
import Grid from '@material-ui/core/Grid'

import Field from '../../Containers/Game'
import Settings from '../../Containers/Settings'

const Main = () => (
  <Grid container justify='center'>
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

export default Main
