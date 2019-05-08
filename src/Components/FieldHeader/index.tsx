import React from 'react'
import Grid from '@material-ui/core/Grid'
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles'

import { FieldRecord } from '../../models/field'
import State from '../../Containers/State'
import ControlPanel from '../ControlPanel'

import { styles } from './styles'

type ClassNames = WithStyles<typeof styles>

interface IProps extends ClassNames {
  field: FieldRecord
  prevField: FieldRecord
  onClickBack: () => void
  onClickRestart: () => void
}

const FieldHeader = ({
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
      <ControlPanel
        field={field}
        prevField={prevField}
        onClickBack={onClickBack}
        onClickRestart={onClickRestart}
      />
    </Grid>
  </Grid>
)

export default withStyles(styles)(FieldHeader)
