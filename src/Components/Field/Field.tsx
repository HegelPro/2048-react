import withWidth, { WithWidth } from '@material-ui/core/withWidth'
import React from 'react'
import { FieldRecord } from '../../models/field/schema'
import FieldRecordHelper from '../../models/field/helpers'
import { FieldSettingsRecord } from '../../models/settings/schema'
import FieldBlock from '../../Blocks/FieldBlock/FieldBlock'
import { fieldSizes } from '../../Blocks/FieldBlock/config'
import Cell from '../Cell/Cell'
import FieldHelpers from '../../models/field/helpers'

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
    ? fieldSizes[width] / FieldHelpers.getColumns(field)
    : fieldSizes[width] / settings.rows * settings.columns / FieldHelpers.getColumns(field)

  return (
    <FieldBlock settings={settings}>
      {field.reduce<React.ReactNodeArray>((accRow, row) => {
        return accRow.concat(
          row.reduce<React.ReactNodeArray>((accCell, cell) => {
            const currentPosition = FieldRecordHelper.getCellPosition(field, cell)
            const previousPosition = FieldRecordHelper.getCellPosition(prevField, cell)

            accCell.push(cell.value
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
            )
            return accCell
          }, [])
        ) 
      }, [])}
    </FieldBlock>
  )
}

export default withWidth()(Field)
