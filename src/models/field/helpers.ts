import {Just, List, Maybe, Nothing} from 'purify-ts'
import {CellRecord} from '../cell/schema'
import CellRecordHelper from '../cell/helpers'
import { FieldRecord } from './schema'
import { FieldSettingsRecord } from '../settings/schema'
import {Vector} from '../vector/schema'
import curry from '../../utils/curry'
import selectRandomAvaibleCellPoint from '../../engine/selectRandomAvaibleCellIndex'

const init = curry(({ columns: columnsNumber, rows: rowsNumber }: {columns: number, rows: number}): FieldRecord => {
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
const createStart = (settings: FieldSettingsRecord) => {
  return selectRandomAvaibleCellPoint(init(settings))
}

const getCellsSumValue = (field: FieldRecord): number => {
  return field.reduce(
    (accRow, row)  => accRow + row.reduce(
      (accCell, cell) => cell.value !== 0
        ? accCell + CellRecordHelper.getViewValue(cell)
        : accCell,
        0,
      ),
    0,
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

const getCellPosition = curry((field: FieldRecord, cell: CellRecord): Maybe<Vector> => {
  const vector = field.reduce<Maybe<Vector>>(
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
  return field.map((row, y) =>
    row.map((cellOne, x) =>
      position.x === x && position.y === y
        ? {...cell, renderId: Math.random()}
        : cellOne
    )
  )
})

const getCell = curry((field: FieldRecord, vector: Vector): Maybe<CellRecord> => {
  return List.at(vector.y, field)
    .chain(row => List.at(vector.x, row))
})

const swapeCells = curry((field: FieldRecord, oneCell: CellRecord, twoCell: CellRecord): FieldRecord => {
  return FieldHelpers.getCellPosition(field, oneCell)
    .chain(vectorOne => FieldHelpers.getCellPosition(field, twoCell)
      .map(vectorTwo =>
        setCellByPosition(
          setCellByPosition(
            field,
            vectorOne,
            twoCell,
          ),
          vectorTwo,
          oneCell,
        )
    ))
    .orDefault(field)
})

const coalitionCells = curry((field: FieldRecord, oneCell: CellRecord, twoCell: CellRecord): FieldRecord => {
  return FieldHelpers.getCellPosition(field, oneCell)
    .chain(vectorOne => 
        FieldHelpers.getCellPosition(field, twoCell)
        .map(vectorTwo => 
            setCellByPosition(
              field,
              vectorTwo,
              {
                ...twoCell,
                id: oneCell.id,
                value: twoCell.value + 1,
              }
            )
        )
      .map(newField =>
        setCellByPosition(
          newField,
          vectorOne,
          CellRecordHelper.init({ value: 0 }),
        )
      )
    )
    .orDefault(field)
})

const hasCell = curry((field: FieldRecord, vector: Vector): boolean =>
  getCell(field, vector).isJust()
)

const equals = curry((fieldOne: FieldRecord, fieldTwo: FieldRecord): boolean => (
  FieldHelpers.getColumns(fieldOne) === FieldHelpers.getColumns(fieldTwo)
  && FieldHelpers.getRows(fieldOne) === FieldHelpers.getRows(fieldTwo)
  && fieldOne.every(
    (row, y) => row.every(
      ({value}, x) => value === fieldTwo[y][x].value
    )
  )
  
))

const zero: FieldRecord = []

const FieldHelpers = {
  init,

  createStart,

  getRows,
  getColumns,

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
