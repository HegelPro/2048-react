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

export const mockBeforeFieldOne: FieldRecord = initCellsFromArray(mockCellsBeforeOne)

export const mockAfterFieldOne: FieldRecord = initCellsFromArray(mockCellsAfterOne)

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
  [0, 1],
  [0, 1],
  [1, 1],
  [1, 2],
  [2, 1],
  [2, 2],
]

export const mockBeforeFieldTwo: FieldRecord = initCellsFromArray(mockCellsBeforeTwo)

export const mockAfterFieldTwo: FieldRecord = initCellsFromArray(mockCellsAfterTwo)

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
  [0, 0, 1],
  [0, 0, 1],
  [0, 0, 1],
  [0, 1, 1],
  [0, 1, 1],
  [0, 1, 1],
  [1, 1, 1],
]

export const mockBeforeFieldThree: FieldRecord = initCellsFromArray(mockCellsBeforeThree)

export const mockAfterFieldThree: FieldRecord = initCellsFromArray(mockCellsAfterThree)
