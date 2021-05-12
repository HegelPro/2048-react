import * as Field from '../../models/field'
import withWidth, { WithWidth } from '@material-ui/core/withWidth'
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints'
import Cell from '../Cell/Cell'
import FieldBlock from '../../Blocks/FieldBlock/FieldBlock'
import { FieldSettingsRecord } from '../../models/settings/schema'
import React from 'react'
import { fieldSizes } from '../../Blocks/FieldBlock/config'
import {option} from 'fp-ts'

interface FieldProps extends WithWidth {
  field: Field.Field
  // prevField: FieldRecord
  settings: FieldSettingsRecord
}

function selectCellSize(field: Field.Field, settings: FieldSettingsRecord,width: Breakpoint): number {
  const fieldColumns =  field[0].length
  return settings.columns > settings.rows
    ? fieldSizes[width] / fieldColumns
    : fieldSizes[width] / settings.rows * settings.columns / fieldColumns
}

const FieldComp = ({
  width,
  settings,
  field,
  // prevField,
}: FieldProps) => {
  const cellSize = selectCellSize(field, settings, width)

  return (
    <FieldBlock settings={settings}>
      {Field.reduceWithPosition<React.ReactNodeArray>([], (acc, maybeCell, position) => {
        const cell = option.toUndefined(maybeCell)
        if (cell) {
          // const currentPosition = FieldHelpers.getCellPosition(field, Just(cell))
          // const previousPosition = FieldHelpers.getCellPosition(prevField, Just(cell))

          return [
            ...acc,
            (
              <Cell
                key={cell.id}
                cell={cell}
                size={cellSize}
                currentPosition={position}
                // previousPosition={position}
              />
            )
          ]
        }

        return acc
      })(field)}
    </FieldBlock>
  )
}

export default withWidth()(FieldComp)
