import React from 'react'
import withWidth, { WithWidth } from '@material-ui/core/withWidth'

import { FieldRecord } from '../../models/field'
import { FieldSettingsRecord } from '../../models/settings'
import FieldContainer from '../FieldContainer'
import { fieldSizes } from '../FieldContainer/config'
import Cell from '../Cell'

interface IProps extends WithWidth {
  field: FieldRecord
  prevField: FieldRecord
  settings: FieldSettingsRecord
}

const Field = ({
  width,
  settings,
  field,
  prevField,
}: IProps) => {
  const cellSize = settings.columns > settings.rows
    ? fieldSizes[width] / field.columns
    : fieldSizes[width] / settings.rows * settings.columns / field.columns
  return (
    <FieldContainer settings={settings}>
      {field.cells.map((cell) => {
        const currentPosition = field.getCellPosition(cell)
        const previousPosition = prevField.getCellPosition(cell)
        return cell.value
          ? (
            <Cell
              key={cell.id}
              cell={cell}
              size={cellSize}
              currentPosition={currentPosition}
              previousPosition={previousPosition}
            />
          )
          : null
      })}
    </FieldContainer>
  )
}

export default withWidth()(Field)
