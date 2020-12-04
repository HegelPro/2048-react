import { FieldRecord } from '../models/field/schema'
import CellRecordHelper from '../models/cell/helpers'
import { updateArray } from '../utils/array'

export default function selectRandomAvaibleCellPoint(field: FieldRecord): FieldRecord {
  const avaibleCells = field.cells.filter((cell) => cell.value === 0)
  const randonAvaibleCellIndex = Math.floor(Math.random() * avaibleCells.length)
  const selectedCell = avaibleCells[randonAvaibleCellIndex]
  const cellsIndex = field.cells.findIndex((cell) => cell === selectedCell)

  return avaibleCells.length > 0
    ? {
      ...field,
      cells: updateArray(cellsIndex)
        (CellRecordHelper.init({ value: Math.random() > 0.8 ? 2 : 1 }))
        (field.cells),
    }
    : field
}
