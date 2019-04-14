import { FieldRecord } from '../models/field'
import { CellRecord } from '../models/cell';

export default function selectRandomAvaibleCellPoint(field: FieldRecord): FieldRecord {
  const avaibleCells = field.cells.filter(cell => cell.value === 0)
  const randonAvaibleCellIndex = Math.floor(Math.random() * avaibleCells.size)
  const selectedCell = avaibleCells.get(randonAvaibleCellIndex)
  const cellsIndex = field.cells.findIndex(cell => cell === selectedCell)
  
  return avaibleCells.size > 0
    ? field.update(
        'cells',
        cells => cells.set(
          cellsIndex,
          CellRecord.init({
            value: Math.random() > 0.8 ? 2 : 1
          })))
    : field
}
