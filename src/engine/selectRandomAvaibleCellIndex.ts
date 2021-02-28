import { CellRecord } from '../models/cell/schema'
import CellRecordHelper from '../models/cell/helpers'
import FieldHelpers from '../models/field/helpers'
import { FieldRecord } from '../models/field/schema'
import { randomArrayElem } from '../utils/array'

export default function selectRandomAvaibleCellPoint(field: FieldRecord): FieldRecord {
  const avaibleCells: CellRecord[] = FieldHelpers.reduce<CellRecord[]>(
    [],
    (acc, cell) => cell.value === 0 ? [...acc, cell] : acc,
    field,
  )
  const selectedCell = randomArrayElem(avaibleCells)
  const cellVector = FieldHelpers.getCellPosition(field, selectedCell)

  return cellVector.map(
    vector => FieldHelpers.setCellByPosition(
      field,
      vector,
      CellRecordHelper.init(Math.random() > 0.8 ? 2 : 1),
    )
  ).orDefault(field)
}
