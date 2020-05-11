import React from 'react'
import withWidth, { WithWidth } from '@material-ui/core/withWidth'

import { FieldRecord, FieldRecordHelper } from '../../models/field'
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
        const currentPosition = FieldRecordHelper.getCellPosition(field, cell)
        const previousPosition = FieldRecordHelper.getCellPosition(prevField, cell)
        return cell.value
          ? (
            <Cell
              key={cell.renderId}
              cell={cell}
              size={cellSize}
              currentPosition={currentPosition.extract()}
              previousPosition={previousPosition.extract()}
            />
          )
          : null
      })}
    </FieldBlock>
  )
}

export default withWidth()(Field)
