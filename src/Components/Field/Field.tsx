import withWidth, { WithWidth } from '@material-ui/core/withWidth'
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints'
import Cell from '../Cell/Cell'
import FieldBlock from '../../Blocks/FieldBlock/FieldBlock'
import FieldHelpers from '../../models/field/helpers'
import { FieldRecord } from '../../models/field/schema'
import { FieldSettingsRecord } from '../../models/settings/schema'
import React from 'react'
import { fieldSizes } from '../../Blocks/FieldBlock/config'
import { Just } from 'purify-ts'

interface FieldProps extends WithWidth {
  field: FieldRecord
  prevField: FieldRecord
  settings: FieldSettingsRecord
}

function selectCellSize(field: FieldRecord, settings: FieldSettingsRecord,width: Breakpoint): number {
  const fieldColumns = FieldHelpers.getColumns(field)
  return settings.columns > settings.rows
    ? fieldSizes[width] / fieldColumns
    : fieldSizes[width] / settings.rows * settings.columns / fieldColumns
}

const Field = ({
  width,
  settings,
  field,
  prevField,
}: FieldProps) => {
  const cellSize = selectCellSize(field, settings, width)

  return (
    <FieldBlock settings={settings}>
      {FieldHelpers.reduce<React.ReactNodeArray>([], (acc, maybeCell) => {
        const cell = maybeCell.extract()
        if (cell) {
          const currentPosition = FieldHelpers.getCellPosition(field, Just(cell))
          const previousPosition = FieldHelpers.getCellPosition(prevField, Just(cell))

          return [
            ...acc,
            (
              <Cell
                key={cell.renderId}
                cell={cell}
                size={cellSize}
                currentPosition={currentPosition}
                previousPosition={previousPosition}
              />
            )
          ]
        }

        return acc
      }, field)}
    </FieldBlock>
  )
}

export default withWidth()(Field)
