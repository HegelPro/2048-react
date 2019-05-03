import React from 'react'
import { Map } from 'immutable'
import Fab from '@material-ui/core/Fab'
import Cached from '@material-ui/icons/Cached'
import Settings from '@material-ui/icons/Settings'
import Reply from '@material-ui/icons/Reply'
import { Grid, Typography } from '@material-ui/core'
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles'

import { FieldRecord } from '../../models/field'
import { VectorRecord } from '../../models/vector'
import history from '../../setup/history'

import { styles } from './styles'

type ClassNames = WithStyles<typeof styles>

interface IProps extends ClassNames {
  field: FieldRecord
  records: Map<VectorRecord, number>
  prevField: FieldRecord
  onClickBack: () => void
  onClickRestart: () => void
}

const Field = ({
  field,
  records,
  prevField,
  onClickBack,
  onClickRestart,
}: IProps) => (
  <Grid container justify='space-between'>
    <Grid item>
      <Typography>
        {field.getCellsSumValue()}
      </Typography>
      <Typography>
        {records.get(new VectorRecord({
          x: field.columns,
          y: field.rows,
        })) || 0}
      </Typography>
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
