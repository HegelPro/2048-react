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
  columns: number,
  rows: number,
): CellRecord[] => {
  let cellList = []
  for (let y = 0; y < rows * columns; y++) {
    cellList.push(
      CellRecordHelper.init({ value: 0 }),
    )
  }
  return cellList
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
  return field.cells.reduce((result, cell) => cell.value !== 0
    ? result + CellRecordHelper.getViewValue(cell)
    : result, 0)
}

const getCellPosition = curry((field: FieldRecord, cell: CellRecord): Maybe<Vector> => {
  const position = List.findIndex((cellOne) => cellOne.id === cell.id, field.cells)
  return position.map(position => {
    return {
      x: position % field.columns,
      y: Math.floor((position / field.columns)),
    }
  })
})

const getCell = curry((field: FieldRecord, vector: Vector): Maybe<CellRecord> => {
  const cell = field.cells[vector.x + vector.y * field.columns]
  return vector.x >= 0
    && vector.y >= 0
    && vector.x < field.columns
    && vector.y < field.rows
      ? Just(cell)
      : Nothing
})
const setCell = curry((field: FieldRecord, vector: Vector, cell: CellRecord): FieldRecord => {
  return {
    columns: field.columns,
    rows: field.rows,
    cells: updateArray(vector.x + vector.y * field.columns)
      ({...cell, renderId: Math.random()})
      (field.cells)
  }
})


const swapeCells = curry((field: FieldRecord, vectorOne: Vector, vectorTwo: Vector): FieldRecord => {
  return getCell(field, vectorOne)
    .chain(firstCell =>
      getCell(field, vectorTwo)
        .map(secondCell =>
          setCell(
            field,
            vectorOne,
            secondCell,
          ))
            .map(newField =>
              setCell(
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
          setCell(
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
      setCell(
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
  fieldOne.cells.every(({value}, index) => value === fieldTwo.cells[index].value)
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

  getCell,
  setCell,

  hasCell,

  swapeCells,
  coalitionCells,

  equals,

  zero,
}

export default FieldHelpers
