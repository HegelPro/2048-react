import React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import withWidth, { WithWidth } from '@material-ui/core/withWidth'

import { FieldRecord } from '../../models/field'
import { RecordElementRecord } from '../../models/recordElement'

import * as strings from './strings'
import { useStyles } from './styles'
import { recordFontSizes } from './config'

interface IProps extends
WithWidth {
  field: FieldRecord
  record?: RecordElementRecord
}

const Records = ({
  field,
  record,
  width,
}: IProps) => {
  const classes = useStyles()
  return (
    <Box display='flex'>
      <Box mr={1}>
        <Typography
          gutterBottom
          className={classes.typography}
          variant='h3'
          color='primary'
          style={{ fontSize: recordFontSizes[width] }}
        >
          {`${strings.bestRecord}: ${record ? record.value : 0}`}
        </Typography>
      </Box>
      <Box mr={1}>
        <Typography
          gutterBottom
          className={classes.typography}
          variant='h3'
          color='primary'
          style={{ fontSize: recordFontSizes[width] }}
        >{`${strings.score}: ${field.getCellsSumValue()}`}</Typography>
      </Box>
    </Box>
  )
}

export default withWidth()(Records)
