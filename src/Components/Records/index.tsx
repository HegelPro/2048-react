import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles'
import withWidth, { WithWidth } from '@material-ui/core/withWidth'

import { FieldRecord } from '../../models/field'
import { RecordElementRecord } from '../../models/recordElement'

import * as strings from './strings'
import { styles } from './styles'
import { recordFontSizes } from './config'

type ClassNames = WithStyles<typeof styles>

interface IProps extends ClassNames,
  WithWidth {
  field: FieldRecord
  record?: RecordElementRecord
}

const Records = ({
  classes,
  field,
  record,
  width,
}: IProps) => (
  <Grid
    container
    spacing={1}
  >
    <Grid item>
      <Typography
        gutterBottom
        className={classes.typography}
        variant='h3'
        color='primary'
        style={{ fontSize: recordFontSizes[width] }}
      >{`${strings.bestRecord}: ${record ? record.value : 0}`}</Typography>
    </Grid>
    <Grid item>
      <Typography
        gutterBottom
        className={classes.typography}
        variant='h3'
        color='primary'
        style={{ fontSize: recordFontSizes[width] }}
        >{`${strings.score}: ${field.getCellsSumValue()}`}</Typography>
    </Grid>
  </Grid>
)

export default withWidth()(withStyles(styles)(Records))
