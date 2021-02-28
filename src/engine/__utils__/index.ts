import { CellRecord } from '../../models/cell/schema'
import CellRecordHelper from '../../models/cell/helpers'

export function initCellsFromArray(array: number[][]): CellRecord[][] {
  return array.map(row => row.map(CellRecordHelper.init))
}
