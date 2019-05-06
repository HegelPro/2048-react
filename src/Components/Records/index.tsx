import React from 'react'
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
  // classes,
  field,
  record,
}: IProps) => (
  <div>
    <Typography>{strings.score}</Typography>
    <Typography>
      {field.getCellsSumValue()}
    </Typography>
    <Typography>{strings.bestRecord}</Typography>
    <Typography>
      {record ? record.value : 0}
    </Typography>
  </div>
)

export default withStyles(styles)(Records)
