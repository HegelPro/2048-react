import { List } from 'immutable'

import { CellRecord } from '../cell'

export function initCells(
  columns: number,
  rows: number,
): List<CellRecord> {
  let cellList = List<CellRecord>()
  for (let y = 0; y < rows * columns; y++) {
    cellList = cellList.push(
      CellRecord.init({ value: 0 })
    )
  }
  return cellList
}