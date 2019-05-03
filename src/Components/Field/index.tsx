import React from 'react'
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles'
import { styles } from './styles'
import { FieldRecord } from '../../models/field'
import FieldContainer from '../FieldContainer'
import Cell from '../Cell'
import { FieldSettingsRecord } from '../../models/settings'

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
