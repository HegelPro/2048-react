import { CellRecord } from '../models/cell/schema'
import CellRecordHelper from '../models/cell/helpers'
import FieldHelpers from '../models/field/helpers'
import { FieldRecord } from '../models/field/schema'

export default function selectRandomAvaibleCellPoint(field: FieldRecord): FieldRecord {
  const avaibleCells: CellRecord[] = field.reduce<CellRecord[]>((accRow, row) => {
    return accRow.concat(
      row.reduce<CellRecord[]>((accCell, cell) => {
        if(cell.value === 0) {
          accCell.push(cell)
        }
      return accCell
      }, [])
    ) 
  }, [])
  const randonAvaibleCellIndex = Math.floor(Math.random() * avaibleCells.length)
  const selectedCell = avaibleCells[randonAvaibleCellIndex]
  const cellVector = FieldHelpers.getCellPosition(field, selectedCell)

  return cellVector.map(
    vector => FieldHelpers.setCellByPosition(
      field,
      vector,
      CellRecordHelper.init({ value: Math.random() > 0.8 ? 2 : 1 }),
    )
  ).orDefault(field)
}
