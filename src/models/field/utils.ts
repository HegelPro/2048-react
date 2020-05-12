import { CellRecord, CellRecordHelper } from '../cell'

export function initCells(
  columns: number,
  rows: number,
): CellRecord[] {
  let cellList = []
  for (let y = 0; y < rows * columns; y++) {
    cellList.push(
      CellRecordHelper.init({ value: 0 }),
    )
  }
  return cellList
}
