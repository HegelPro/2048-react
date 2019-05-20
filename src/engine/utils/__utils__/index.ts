import { List } from 'immutable'

import { CellRecord } from '../../../models/cell'

export function initCellsFromArray(array: number[]): List<CellRecord> {
  return List(array.map((cellValue) => CellRecord.init({ value: cellValue })))
}

export function cellsHaveTheSameValues(
  fieldOneCells: List<CellRecord>,
  fieldTwoCells: List<CellRecord>,
): boolean {
  return fieldOneCells.every((oneCell, cellOneIndex) => {
    const twoCell = fieldTwoCells.get(cellOneIndex)
    if (twoCell) {
      if (oneCell.value === twoCell.value) {
        return true
      }
      return false
    }
    return false
  })
}
