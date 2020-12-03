import {CellRecord, CellRecordHelper, CellRecordSchema} from '../cell'
import {Vector} from '../vector'
import {initCells} from './utils'
import {Maybe, List, Codec, GetType, number, array} from 'purify-ts'
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
};

const getCellsSumValue = (field: FieldRecord) => {
  return field.cells.reduce((result, cell) => cell.value !== 0
    ? result + CellRecordHelper.getViewValue(cell)
    : result, 0)
};

const getCellPosition = (field: FieldRecord, cell: CellRecord): Maybe<Vector> => {
  const position = List.findIndex((cellOne) => cellOne.id === cell.id, field.cells)
  return position.map(position => {
    return {
      x: position % field.columns,
      y: Math.floor((position / field.columns)),
    }
  })
};

const getCell = (field: FieldRecord, vector: Vector): CellRecord => {
  const cell = field.cells[vector.x + vector.y * field.columns]
  if (!cell) {
    throw new Error('CellRecord isn\'t exist')
  }
  return cell
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


const swapeCells = (fieldThis: FieldRecord, vectorOne: Vector, vectorTwo: Vector): FieldRecord => {
  // TODO fieldThis - bad calling 
  const savedCellForSwape = getCell(fieldThis, vectorOne)
  const field = setCell(
    fieldThis,
    vectorOne,
    getCell(fieldThis, vectorTwo),
  )
  return setCell(
    field,
    vectorTwo,
    savedCellForSwape,
  )
}

const coalitionCells = (fieldThis: FieldRecord, vectorOne: Vector, vectorTwo: Vector): FieldRecord => {
  // TODO fieldThis - bad calling 
  const field = setCell(
    fieldThis,
    vectorTwo,
    {
      ...getCell(fieldThis, vectorTwo),
      id: getCell(fieldThis, vectorOne).id,
      value: getCell(fieldThis, vectorTwo).value + 1,
    },
  )
  return setCell(
    field,
    vectorOne,
    CellRecordHelper.init({ value: 0 }),
  )
}

const hasCell = (field: FieldRecord, vector: Vector): boolean => {
  if (
    vector.x >= 0
    && vector.y >= 0
    && vector.x < field.columns
    && vector.y < field.rows
  ) {
    return true
  }
  return false
}

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
