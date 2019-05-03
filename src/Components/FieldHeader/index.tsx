import React from 'react'
import Fab from '@material-ui/core/Fab'
import Cached from '@material-ui/icons/Cached'
import Settings from '@material-ui/icons/Settings'
import Reply from '@material-ui/icons/Reply'
import { Grid } from '@material-ui/core'
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles'

import { FieldRecord } from '../../models/field'
import history from '../../setup/history'

import { styles } from './styles'
import State from '../../Containers/State'

type ClassNames = WithStyles<typeof styles>

interface IProps extends ClassNames {
  field: FieldRecord
  prevField: FieldRecord
  onClickBack: () => void
  onClickRestart: () => void
}

const Field = ({
  field,
  prevField,
  onClickBack,
  onClickRestart,
}: IProps) => (
  <Grid container justify='space-between'>
    <Grid item>
      <State />
    </Grid>
    <Grid item>
      <Fab
        color='primary'
        aria-label='Previous Field'
        onClick={onClickBack}
        disabled={field.cells.equals(prevField.cells)}
      ><Reply /></Fab>
      <Fab
        color='primary'
        aria-label='Restart'
        onClick={onClickRestart}
      ><Cached /></Fab>
      <Fab
        aria-label='Settings'
        color='primary'
        onClick={() => history.push('/settings')}
      ><Settings /></Fab>
    </Grid>
  </Grid>
)

export default withStyles(styles)(Field)
