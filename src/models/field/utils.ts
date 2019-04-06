import { List } from 'immutable'

import { Cell } from '../cell'

export function initCells(
  columns: number,
  rows: number,
): List<Cell> {
  let cellList = List<Cell>()
  for (let y = 0; y < rows * columns; y++) {
    cellList = cellList.push(
      Cell.init({ value: 0 })
    )
  }
  return cellList
}