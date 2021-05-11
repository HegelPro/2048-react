import {Just, List, Maybe, Nothing} from 'purify-ts'
import {CellRecord} from '../cell/schema'
import CellRecordHelper from '../cell/helpers'
import { FieldRecord } from './schema'
import { FieldSettingsRecord } from '../settings/schema'
import {Vector} from '../vector/schema'
import selectRandomAvaibleCellPoint from '../../engine/selectRandomAvaibleCellIndex'

const init = ({ columns: columnsNumber, rows: rowsNumber }: {columns: number, rows: number}): FieldRecord => {
  let columns: Maybe<CellRecord>[][] = []
  for (let y = 0; y < columnsNumber; y++) {
    let row: Maybe<CellRecord>[] = []
    for (let x = 0; x < rowsNumber; x++) {
      row.push(Nothing)
    }
    columns.push(row)
  }
  return columns
}
const createStart = (settings: FieldSettingsRecord): FieldRecord => {
  return selectRandomAvaibleCellPoint(init(settings))
}

const getCellsSumValue = (field: FieldRecord): number => {
  return reduce(
    0,
    (acc, cell) => cell
      .map(cell => acc + CellRecordHelper.getViewValue(cell))
      .orDefault(acc),
    field
  )
}

const getRows = (field: FieldRecord): number => {
  return field.length
  
}
const getColumns = (field: FieldRecord): number => {
  return List.at(0, field)
    .map(row => row.length)
    .orDefault(0)
}

const getRow = (field: FieldRecord, y: number): Maybe<Maybe<CellRecord>[]> => List.at(y, field)
const setRow = (field: FieldRecord, y: number, row: Maybe<CellRecord>[]): FieldRecord =>
  field.map((fieldRow, i) => y === i ? row : fieldRow)

// TODO mutations
const swapCellsInRow = (row: Maybe<CellRecord>[], xOne: number, xTwo: number): Maybe<CellRecord>[] => {
  const cellOne = row[xOne]
  row[xOne] = row[xTwo]
  row[xTwo] = cellOne
  return row
}

// TODO cell will be a Maybe now, maybe need to strict this param
// maybe cellOne and cell could have defferents values
const getCellPosition = (field: FieldRecord, cell: Maybe<CellRecord>): Maybe<Vector> => {
  return reduce<Maybe<Vector>>(Nothing, (acc, cellOne, vector) => acc.alt(
    cell.equals(cellOne)
      ? Just(vector)
      : Nothing
  ), field)
}
const setCellByPosition = (field: FieldRecord, position: Vector, cell: Maybe<CellRecord>): FieldRecord => {
  return map(
    (cellOne, {x, y}) => {
      return position.x === x && position.y === y
        ? cell
        : cellOne
    },
    field
  )
}

const getCell = (field: FieldRecord, vector: Vector): Maybe<CellRecord> => {
  return List.at(vector.y, field)
    .chain(row => List.at(vector.x, row))
    .join()
}

const swapeCells = (field: FieldRecord, onePosition: Vector, twoPosition: Vector): FieldRecord => {
  const saveCellOne = FieldHelpers.getCell(field, onePosition)
  const saveCellTwo = FieldHelpers.getCell(field, twoPosition)

  return FieldHelpers.setCellByPosition(
    FieldHelpers.setCellByPosition(
      field,
      onePosition,
      saveCellTwo
    ),
    twoPosition,
    saveCellOne
  )
}

const coalitionCells = (field: FieldRecord, onePosition: Vector, twoPosition: Vector): FieldRecord => {
  return FieldHelpers.getCell(field, onePosition)
    .chain(oneCell =>
      FieldHelpers.getCell(field, twoPosition)
        .map(twoCell => ({
          oneCell,
          twoCell
        }))
    )
    .map(({
      oneCell,
      twoCell,
    }) => FieldHelpers.setCellByPosition(
      FieldHelpers.setCellByPosition(
        field,
        onePosition,
        // Just(CellRecordHelper.init(0))
        Nothing
      ),
      twoPosition,
      Just(CellRecordHelper.concat(oneCell, twoCell))
    ))
    .orDefault(field)
}

const hasCell = (field: FieldRecord, vector: Vector): boolean =>
  getCell(field, vector).isJust()


const equals = (fieldOne: FieldRecord, fieldTwo: FieldRecord): boolean => (
  FieldHelpers.getColumns(fieldOne) === FieldHelpers.getColumns(fieldTwo)
  && FieldHelpers.getRows(fieldOne) === FieldHelpers.getRows(fieldTwo)
  && fieldOne.every(
    (row, y) => row.every(
      (cellOne, x) => {
        const cellTwo = fieldTwo[y][x]
        return cellOne.equals(cellTwo)
      }
    )
  )
)

const reduce = <T>(start: T, f: (acc: T, cell: Maybe<CellRecord>, vector: Vector) => T, field: FieldRecord): T => {
  return field.reduce(
    (accRow, row, y) =>
      row.reduce(
        (accCell, cell, x) => f(accCell, cell, {y, x}),
      accRow,
    ),
    start,
  )
}

const map = <T>(f: (cell: Maybe<CellRecord>, vector: Vector) => T, field: FieldRecord): T[][] => {
  return field.map((row, y) =>
    row.map(
      (cell, x) => f(cell, {y, x})
    )
  )
}

const FieldHelpers = {
  init,

  createStart,

  getRows,
  getColumns,

  setRow,
  getRow,
  swapCellsInRow,

  getCellsSumValue,

  getCellPosition,
  setCellByPosition,

  getCell,

  hasCell,

  swapeCells,
  coalitionCells,

  equals,

  reduce,
  map,
}

export default FieldHelpers
