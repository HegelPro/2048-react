import { CellRecord } from '../../models/cell/schema'
import CellRecordHelper from '../../models/cell/helpers'

export function initCellsFromArray(array: number[][]): CellRecord[][] {
  return array.map((row) => row.map(value => CellRecordHelper.init({ value })))
}

export function cellsHaveTheSameValues(
  fieldOneCells: CellRecord[][],
  fieldTwoCells: CellRecord[][],
): boolean {
  return fieldOneCells.every((row, y) => {
    return row.every((cell, x) => {
      const twoCell = fieldTwoCells[y][x]
      if (twoCell) {
        if(cell.value === twoCell.value) {
          return true
        }
        return false
      }
      return false
    })
  })
}
