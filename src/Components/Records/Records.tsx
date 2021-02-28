import React, { useMemo } from 'react'
import Grid from '@material-ui/core/Grid'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Typography from '@material-ui/core/Typography'
import withWidth, { WithWidth } from '@material-ui/core/withWidth'
import { FieldRecord } from '../../models/field/schema'
import FieldHelpers from '../../models/field/helpers'
import { RecordElementRecord } from '../../models/recordElement/schema'
import { recordFontSizes } from './config'
import * as strings from './strings'


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
  const labelStyle = useMemo(() => ({fontSize:  recordFontSizes[width]}), [width])

  return (
    <Grid container spacing={1}>
      <Grid item>
        <Typography
          gutterBottom
          className={classes.typography}
          variant='h3'
          color='primary'
          style={labelStyle}
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
          style={labelStyle}
        >
          {`${strings.score}: ${FieldHelpers.getCellsSumValue(field)}`}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default withWidth()(Records)
