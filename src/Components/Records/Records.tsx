import * as Field from '../../models/field'
import * as O from 'fp-ts/Option'
import * as strings from './strings'
import React, { useMemo } from 'react'
import withWidth, { WithWidth } from '@material-ui/core/withWidth'
import Grid from '@material-ui/core/Grid'
import { RecordElement } from '../../models/recordElement'
import Typography from '@material-ui/core/Typography'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { recordFontSizes } from './config'


const useStyles = makeStyles(() => ({
  typography: {
    fontFamily: '\'Teko\', sans-serif;',
  },
}))

interface RecordsProps extends
WithWidth {
  field: Field.Field;
  record: O.Option<RecordElement>;
}

const Records = withWidth()(({
  field,
  record,
  width,
}: RecordsProps) => {
  const classes = useStyles()
  const labelStyle = useMemo(() => ({fontSize:  recordFontSizes[width]}), [width])

//   const recordInfo = `${strings.bestRecord}: ${record.map(({value}) => value).orDefault(0)}`
  const scoreInfo = `${strings.score}: ${Field.getCellsSumValue(field)}`

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
          {/* {recordInfo} */}
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
          {scoreInfo}
        </Typography>
      </Grid>
    </Grid>
  )
})

export default Records
