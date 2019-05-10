import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles'
import * as strings from './strings'

import { FieldRecord } from '../../models/field'
import { RecordElementRecord } from '../../models/recordElement'

import { styles } from './styles'

type ClassNames = WithStyles<typeof styles>

interface IProps extends ClassNames {
  field: FieldRecord
  record?: RecordElementRecord
}

const Records = ({
  classes,
  field,
  record,
}: IProps) => (
  <Grid container spacing={1}>
    <Grid item>
      <Typography
        gutterBottom
        className={classes.typography}
        variant='h6'
        color='primary'
      >{`${strings.bestRecord}: ${record ? record.value : 0}`}</Typography>
    </Grid>
    <Grid item>
      <Typography
        gutterBottom
        className={classes.typography}
        variant='h6'
        color='primary'
      >{`${strings.score}: ${field.getCellsSumValue()}`}</Typography>
    </Grid>
  </Grid>
)

export default withStyles(styles)(Records)
