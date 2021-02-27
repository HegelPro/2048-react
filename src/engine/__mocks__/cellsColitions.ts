import { FieldRecord } from '../../models/field/schema'
import { initCellsFromArray } from '../__utils__'

const mockCellsBeforeOne = [
  [0],
  [1],
  [2],
]

const mockCellsAfterOne = [
  [0],
  [1],
  [2],
]

export const mockBeforeFieldOne: FieldRecord = {
  rows: 3,
  columns: 1,
  cells: initCellsFromArray(mockCellsBeforeOne),
}

export const mockAfterFieldOne: FieldRecord ={
  rows: 3,
  columns: 1,
  cells: initCellsFromArray(mockCellsAfterOne),
}

const mockCellsBeforeTwo = [
  [0, 0],
  [1, 0],
  [0, 1],
  [1, 1],
  [1, 2],
  [2, 1],
  [2, 2],
]

const mockCellsAfterTwo = [
  [0, 0],
  [1, 0],
  [0, 1],
  [0, 2],
  [1, 2],
  [2, 1],
  [0, 3],
]

export const mockBeforeFieldTwo: FieldRecord =  {
  rows: 7,
  columns: 2,
  cells: initCellsFromArray(mockCellsBeforeTwo),
}

export const mockAfterFieldTwo: FieldRecord = {
  rows: 7,
  columns: 2,
  cells: initCellsFromArray(mockCellsAfterTwo),
}

const mockCellsBeforeThree = [
  [0, 0, 0],
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1],
  [1, 1, 0],
  [0, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
]

const mockCellsAfterThree = [
  [0, 0, 0],
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1],
  [0, 2, 0],
  [0, 0, 2],
  [1, 0, 1],
  [1, 0, 2],
]

export const mockBeforeFieldThree: FieldRecord = {
  rows: 8,
  columns: 3,
  cells: initCellsFromArray(mockCellsBeforeThree),
}

export const mockAfterFieldThree: FieldRecord = {
  rows: 8,
  columns: 3,
  cells: initCellsFromArray(mockCellsAfterThree),
}
