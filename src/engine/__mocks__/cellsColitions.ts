import { FieldRecord } from '../../models/field'
import { initCellsFromArray } from '../__utils__'

const mockCellsBeforeOne = [
  0,
  1,
  2,
]

const mockCellsAfterOne = [
  0,
  1,
  2,
]

export const mockBeforeFieldOne = new FieldRecord({
  rows: 3,
  columns: 1,
  cells: initCellsFromArray(mockCellsBeforeOne),
})

export const mockAfterFieldOne = new FieldRecord({
  rows: 3,
  columns: 1,
  cells: initCellsFromArray(mockCellsAfterOne),
})

const mockCellsBeforeTwo = [
  0, 0,
  1, 0,
  0, 1,
  1, 1,
  1, 2,
  2, 1,
  2, 2,
]

const mockCellsAfterTwo = [
  0, 0,
  1, 0,
  0, 1,
  0, 2,
  1, 2,
  2, 1,
  0, 3,
]

export const mockBeforeFieldTwo = new FieldRecord({
  rows: 7,
  columns: 2,
  cells: initCellsFromArray(mockCellsBeforeTwo),
})

export const mockAfterFieldTwo = new FieldRecord({
  rows: 7,
  columns: 2,
  cells: initCellsFromArray(mockCellsAfterTwo),
})

const mockCellsBeforeThree = [
  0, 0, 0,
  1, 0, 0,
  0, 1, 0,
  0, 0, 1,
  1, 1, 0,
  0, 1, 1,
  1, 0, 1,
  1, 1, 1,
]

const mockCellsAfterThree = [
  0, 0, 0,
  1, 0, 0,
  0, 1, 0,
  0, 0, 1,
  0, 2, 0,
  0, 0, 2,
  1, 0, 1,
  1, 0, 2,
]

export const mockBeforeFieldThree = new FieldRecord({
  rows: 8,
  columns: 3,
  cells: initCellsFromArray(mockCellsBeforeThree),
})

export const mockAfterFieldThree = new FieldRecord({
  rows: 8,
  columns: 3,
  cells: initCellsFromArray(mockCellsAfterThree),
})
