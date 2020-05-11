import { CellRecord, CellRecordHelper } from '../../models/cell'

export function initCellsFromArray(array: number[]): CellRecord[] {
  return array.map((cellValue) => CellRecordHelper.init({ value: cellValue }))
}

export function cellsHaveTheSameValues(
  fieldOneCells: CellRecord[],
  fieldTwoCells: CellRecord[],
): boolean {
  return fieldOneCells.every((oneCell, cellOneIndex) => {
    const twoCell = fieldTwoCells[cellOneIndex]
    if (twoCell) {
      if (oneCell.value === twoCell.value) {
        return true
      }
      return false
    }
    return false
  })
}
