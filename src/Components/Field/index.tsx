import React from 'react'

import { FieldRecord } from '../../models/field'
import { FieldSettingsRecord } from '../../models/settings'
import FieldContainer from '../FieldContainer'
import Cell from '../Cell'

interface IProps {
  field: FieldRecord
  prevField: FieldRecord
  settings: FieldSettingsRecord
}

const Field = ({
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

export default Field
