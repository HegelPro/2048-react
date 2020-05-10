import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import withWidth, { WithWidth } from '@material-ui/core/withWidth'

import { FieldRecord } from '../../models/field'
import { RecordElementRecord } from '../../models/recordElement'

import * as strings from './strings'
import { recordFontSizes } from './config'

const useStyles = makeStyles(() => ({
  typography: {
    fontFamily: '\'Teko\', sans-serif;',
  },
}))

interface RecordsProps extends
WithWidth {
  field: FieldRecord
  record?: RecordElementRecord
}

const Records = ({
  field,
  record,
  width,
}: RecordsProps) => {
  const classes = useStyles()
  return (
    <Grid container spacing={1}>
      <Grid item>
        <Typography
          gutterBottom
          className={classes.typography}
          variant='h3'
          color='primary'
          style={{ fontSize: recordFontSizes[width] }}
        >
          {`${strings.bestRecord}: ${record ? record.value : 0}`}
        </Typography>
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
}

export default withWidth()(Records)
