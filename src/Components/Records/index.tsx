import React from 'react'
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles'
import { styles } from './styles'
import { Typography } from '@material-ui/core'
import { FieldRecord } from '../../models/field'
import { RecordElementRecord } from '../../models/recordElement'

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
    <Typography>
      {field.getCellsSumValue()}
    </Typography>
    <Typography>
      {record
        ? record.value
        : 0}
    </Typography>
  </div>
)

export default withStyles(styles)(Records)
