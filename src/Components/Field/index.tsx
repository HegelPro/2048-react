import React from 'react'
import withWidth, { WithWidth } from '@material-ui/core/withWidth'

import { FieldRecord } from '../../models/field'
import { FieldSettingsRecord } from '../../models/settings'
import FieldBlock from '../../Blocks/FieldBlock'
import { fieldSizes } from '../../Blocks/FieldBlock/config'
import Cell from '../Cell'

interface FieldProps extends WithWidth {
  field: FieldRecord
  prevField: FieldRecord
  settings: FieldSettingsRecord
}

const Field = ({
  width,
  settings,
  field,
  prevField,
}: FieldProps) => {
  const cellSize = settings.columns > settings.rows
    ? fieldSizes[width] / field.columns
    : fieldSizes[width] / settings.rows * settings.columns / field.columns
  return (
    <FieldBlock settings={settings}>
      {field.cells.map((cell) => {
        const currentPosition = field.getCellPosition(cell)
        const previousPosition = prevField.getCellPosition(cell)
        return cell.value
          ? (
            <Cell
              key={cell.renderId}
              cell={cell}
              size={cellSize}
              currentPosition={currentPosition}
              previousPosition={previousPosition}
            />
          )
          : null
      })}
    </FieldBlock>
  )
}

export default withWidth()(Field)
