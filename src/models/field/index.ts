import {CellRecord, CellRecordHelper, CellRecordSchema} from '../cell'
import {Vector} from '../vector'
import {initCells} from './utils'
import {Maybe, List, Codec, GetType, number, array, Just, Nothing} from 'purify-ts'
import { updateArray } from '../../utils/array'

export type FieldRecord = GetType<typeof FieldSchema>

export const FieldSchema = Codec.interface({
  columns: number,
  rows: number,
  cells: array(CellRecordSchema),
})

const init = ({ columns, rows }: {columns: number, rows: number}): FieldRecord => {
  return {
    rows,
    columns,
    cells: initCells(columns, rows),
  }
}

const getCellsSumValue = (field: FieldRecord): number => {
  return field.cells.reduce((result, cell) => cell.value !== 0
    ? result + CellRecordHelper.getViewValue(cell)
    : result, 0)
}

const getCellPosition = (field: FieldRecord, cell: CellRecord): Maybe<Vector> => {
  const position = List.findIndex((cellOne) => cellOne.id === cell.id, field.cells)
  return position.map(position => {
    return {
      x: position % field.columns,
      y: Math.floor((position / field.columns)),
    }
  })
}

const getCell = (field: FieldRecord, vector: Vector): Maybe<CellRecord> => {
  const cell = field.cells[vector.x + vector.y * field.columns]
  return vector.x >= 0
    && vector.y >= 0
    && vector.x < field.columns
    && vector.y < field.rows
      ? Just(cell)
      : Nothing
}
const setCell = (field: FieldRecord, vector: Vector, cell: CellRecord): FieldRecord => {
  return {
    columns: field.columns,
    rows: field.rows,
    cells: updateArray(vector.x + vector.y * field.columns)
      ({...cell, renderId: Math.random()})
      (field.cells)
  }
}


const swapeCells = (field: FieldRecord, vectorOne: Vector, vectorTwo: Vector): FieldRecord => {
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
}

const coalitionCells = (field: FieldRecord, vectorOne: Vector, vectorTwo: Vector): FieldRecord => {
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
}

const hasCell = (field: FieldRecord, vector: Vector): boolean =>
  getCell(field, vector).isJust()

const zero: FieldRecord = {rows: 0, columns: 0, cells: []}

export const FieldRecordHelper = {
  init,

  getCellsSumValue,
  getCellPosition,

  getCell,
  setCell,

  hasCell,

  swapeCells,
  coalitionCells,

  zero,
}
