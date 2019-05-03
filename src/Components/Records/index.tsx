import React from 'react'
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles'
import { styles } from './styles'
import { Typography } from '@material-ui/core'
import { VectorRecord } from '../../models/vector'
import { Map } from 'immutable'
import { FieldRecord } from '../../models/field'

type ClassNames = WithStyles<typeof styles>

interface IProps extends ClassNames {
  field: FieldRecord
  records: Map<VectorRecord, number>
}

const Records = ({
  // classes,
  field,
  records,
}: IProps) => (
  <div>
    <Typography>
      {field.getCellsSumValue()}
    </Typography>
    <Typography>
      {records.get(new VectorRecord({
        x: field.columns,
        y: field.rows,
      })) || 0}
    </Typography>
  </div>
)

export default withStyles(styles)(Records)
