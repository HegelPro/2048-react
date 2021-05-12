import * as A from 'fp-ts/Array'
import * as Cell from '../models/cell'
import * as Field from '../models/field'
import * as O from 'fp-ts/Option'
import { getFromIterateInDiraction, getIterateInDiraction } from '../utils/matrix'
import { Diraction } from '../models/diraction'
import { pipe } from 'fp-ts/function'

// TODO refactor
const coalitionCellsInRow = (row: O.Option<Cell.Cell>[]): O.Option<Cell.Cell>[] => {
  for(let i = row.length - 1; i > 0; i--) {
    const curCell = O.toUndefined(row[i])
    const prevCell = O.toUndefined(row[i - 1])
    if (curCell && prevCell && Cell.eqCell.equals(curCell, prevCell)) {
      // row = Field.coalitionCellsInRow(i, i - 1)(row)
      row[i] = O.some(Cell.sumCell.concat(curCell, prevCell))
      row[i - 1] = O.none
      i--
    }
  }
  return row
}

const cellsColitions = (
  firstDir: Diraction,
  secondDir: Diraction,
) => (field: Field.Field): Field.Field => {
  return pipe(
    field,
    getIterateInDiraction(firstDir, secondDir),
    A.map(coalitionCellsInRow),
    getFromIterateInDiraction(firstDir, secondDir),
  )
}

export default cellsColitions