import { Just, Maybe, Nothing } from 'purify-ts'
import { getFromIterateInDiraction, getIterateInDiraction } from '../utils/matrix'
import { CellRecord } from '../models/cell/schema'
import CellRecordHelper from '../models/cell/helpers'
import { Diraction } from '../models/vector/constants'
import { FieldRecord } from '../models/field/schema'

const kek = (row: Maybe<CellRecord>[]): Maybe<CellRecord>[] => {
  for(let i = row.length - 1; i > 0; i--) {
    const curCell = row[i].extract()
    const prevCell = row[i - 1].extract()
    if (curCell && prevCell && CellRecordHelper.equals(curCell, prevCell)) {
      row[i] = Just(CellRecordHelper.concat(curCell, prevCell))
      row[i - 1] = Nothing
      i--
    }
  }
  return row
}

const cellsColitions = (
    field: FieldRecord,
    firstDir: Diraction,
    secondDir: Diraction,
): FieldRecord => {
    return getFromIterateInDiraction(
      getIterateInDiraction(field, firstDir, secondDir).map(row => kek(row)),
      firstDir,
      secondDir,
    )
}

export default cellsColitions