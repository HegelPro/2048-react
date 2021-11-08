import * as Field from '../../models/field'
import * as O from 'fp-ts/Option'
import withWidth, { WithWidth } from '@material-ui/core/withWidth'
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints'
import Cell from '../Cell/Cell'
import FieldBlock from '../FieldBlock/FieldBlock'
import { FieldSettingsRecord } from '../../models/fieldSettings'
import React from 'react'
import { fieldSizes } from '../FieldBlock/config'
import {pipe} from 'fp-ts/function'

interface FieldProps extends WithWidth {
  field: Field.Field
  previousField: O.Option<Field.Field>
  settings: FieldSettingsRecord
}

function selectCellSize(field: Field.Field, settings: FieldSettingsRecord, width: Breakpoint): number {
  const fieldColumns =  field[0].length
  return settings.columns > settings.rows
    ? fieldSizes[width] / fieldColumns
    : fieldSizes[width] / settings.rows * settings.columns / fieldColumns
}

const FieldComp = withWidth()(({
  width,
  settings,
  field,
  previousField,
}: FieldProps) => {
  const cellSize = selectCellSize(field, settings, width)

  return (
    <FieldBlock settings={settings}>
      {Field.reduceWithPosition<React.ReactNodeArray>([], (acc, maybeCell, position) =>
        pipe(
          maybeCell,
          O.map(cell => (
            [
              ...acc,
              (
                <Cell
                  key={cell.id}
                  cell={cell}
                  size={cellSize}
                  currentPosition={position}
                  previousPosition={pipe(
                    previousField,
                    O.chain(Field.getCellPosition(cell))
                  )}
                />
              )
            ]
          )),
          O.getOrElse(() => acc)
        )
      )(field)}
    </FieldBlock>
  )
})

export default FieldComp
