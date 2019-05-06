import React from 'react'
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles'

import { FieldRecord } from '../../models/field'
import { FieldSettingsRecord } from '../../models/settings'
import FieldContainer from '../FieldContainer'
import Cell from '../Cell'

import { styles } from './styles'

type ClassNames = WithStyles<typeof styles>

interface IProps extends ClassNames {
  field: FieldRecord
  prevField: FieldRecord
  settings: FieldSettingsRecord
}

const Field = ({
  classes,
  settings,
  field,
  prevField,
}: IProps) => (
  <FieldContainer settings={settings}>
    {field.cells.map((cell) => {
      const currentPosition = field.getCellPosition(cell)
      const previousPosition = prevField.getCellPosition(cell)
      return (
        <div
          className={classes.spaceForCell}
          key={cell.renderId}
          style={{ width: `${100 / settings.columns}%` }}
        >
          <Cell
            cell={cell}
            currentPosition={currentPosition}
            previousPosition={previousPosition}
          />
        </div>
      )
    })}
  </FieldContainer>
)

export default withStyles(styles)(Field)
