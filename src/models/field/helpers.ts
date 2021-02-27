import {CellRecord} from '../cell/schema'
import CellRecordHelper from '../cell/helpers'
import {Vector} from '../vector/schema'
import {Maybe, List, Just, Nothing} from 'purify-ts'
import { updateArray } from '../../utils/array'
import curry from '../../utils/curry'
import { FieldRecord } from './schema'
import { FieldSettingsRecord } from '../settings/schema'
import selectRandomAvaibleCellPoint from '../../engine/selectRandomAvaibleCellIndex'

const initCells = curry((
  columnsNumber: number,
  rowsNumber: number,
): CellRecord[][] => {
  let columns: CellRecord[][] = []
  for (let y = 0; y < columnsNumber; y++) {
    const row: CellRecord[] = []
    for (let x = 0; x < rowsNumber; x++) {
      row.push(CellRecordHelper.init({ value: 0 }))
    }
    columns.push(row)
  }
  return columns
})
const init = ({ columns, rows }: {columns: number, rows: number}): FieldRecord => {
  return {
    rows,
    columns,
    cells: initCells(columns, rows),
  }
}
const createStart = (settings: FieldSettingsRecord) => {
  return selectRandomAvaibleCellPoint(init(settings))
}

const getCellsSumValue = (field: FieldRecord): number => {
  return field.cells.reduce(
    (accRow, row)  => accRow + row.reduce(
      (accCell, cell) => cell.value !== 0
        ? accCell + CellRecordHelper.getViewValue(cell)
        : accCell,
        0,
      ),
    0,
  )
}

const getCellPosition = curry((field: FieldRecord, cell: CellRecord): Maybe<Vector> => {
  const vector = field.cells.reduce<Maybe<Vector>>(
    (accRow, row, y) => accRow.alt(
      row.reduce<Maybe<Vector>>(
        (accCell, cellOne, x) =>
          accCell.alt(cellOne.id === cell.id
            ? Just({x, y})
            : Nothing
          ),
        Nothing,
      )
    ),
    Nothing,
  )
  return vector
})
const setCellByPosition = curry((field: FieldRecord, position: Vector, cell: CellRecord): FieldRecord => {
  return {
    ...field,
    cells: field.cells.map((row, y) =>
      row.map((cellOne, x) =>
        position.x === x && position.y === y
          ? {...cell, renderId: Math.random()}
          : cellOne
      )
    )
  }
})

const getCell = curry((field: FieldRecord, vector: Vector): Maybe<CellRecord> => {
  return List.at(vector.y, field.cells)
    .chain(row => List.at(vector.x, row))
})

const swapeCells = curry((field: FieldRecord, vectorOne: Vector, vectorTwo: Vector): FieldRecord => {
  return getCell(field, vectorOne)
    .chain(firstCell =>
      getCell(field, vectorTwo)
        .map(secondCell =>
          setCellByPosition(
            field,
            vectorOne,
            secondCell,
          ))
            .map(newField =>
              setCellByPosition(
                newField,
                vectorTwo,
                firstCell,
              )
            )
    )
    .orDefault(field)
})

const coalitionCells = curry((field: FieldRecord, vectorOne: Vector, vectorTwo: Vector): FieldRecord => {
  return getCell(field, vectorOne)
    .chain(firstCell =>
      getCell(field, vectorTwo)
        .map(secondCell =>
          setCellByPosition(
            field,
            vectorTwo,
            {
              ...secondCell,
              id: firstCell.id,
              value: secondCell.value + 1,
            }
          )
        )
    )
    .map(newField =>
      setCellByPosition(
        newField,
        vectorOne,
        CellRecordHelper.init({ value: 0 }),
      )
    )
    .orDefault(field)
})

const hasCell = curry((field: FieldRecord, vector: Vector): boolean =>
  getCell(field, vector).isJust()
)

const equals = curry((fieldOne: FieldRecord, fieldTwo: FieldRecord) => (
  fieldOne.cells.every(
    (row, y) => row.every(
      ({value}, x) => value === fieldTwo.cells[y][x].value
    )
  )
  && fieldOne.columns === fieldTwo.columns
  && fieldOne.rows === fieldTwo.rows
))

const zero: FieldRecord = {rows: 0, columns: 0, cells: []}

const FieldHelpers = {
  initCells,
  init,

  createStart,

  getCellsSumValue,

  getCellPosition,
  setCellByPosition,

  getCell,

  hasCell,

  swapeCells,
  coalitionCells,

  equals,

  zero,
}

export default FieldHelpers
