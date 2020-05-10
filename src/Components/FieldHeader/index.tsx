import React from 'react'
import { Grid } from '@material-ui/core'

import State from '../../Containers/State'
import ControlPanel from '../../Containers/ControlPanel'

const FieldHeader = () => (
  <Grid
    container spacing={1}
    justify="space-between"
    alignItems="center"
  >
    <Grid item>
      <State />
    </Grid>
    <Grid item>
      <ControlPanel />
    </Grid>
  </Grid>
)

export default FieldHeader
