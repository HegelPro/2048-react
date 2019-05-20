import { FieldRecord } from '../../../models/field'
import { DIRACTIONS } from '../../../models/vector/constants'
import cellsMover from '../cellsMover'

import { cellsHaveTheSameValues, initCellsFromArray } from '../__utils__'

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

const mockBeforeFieldOne = new FieldRecord({
  rows: 3,
  columns: 1,
  cells: initCellsFromArray(mockCellsBeforeOne),
})

const mockAfterFieldOne = new FieldRecord({
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
  0, 1,
  0, 1,
  1, 1,
  1, 2,
  2, 1,
  2, 2,
]

const mockBeforeFieldTwo = new FieldRecord({
  rows: 7,
  columns: 2,
  cells: initCellsFromArray(mockCellsBeforeTwo),
})

const mockAfterFieldTwo = new FieldRecord({
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
  0, 0, 1,
  0, 0, 1,
  0, 0, 1,
  0, 1, 1,
  0, 1, 1,
  0, 1, 1,
  1, 1, 1,
]

const mockBeforeFieldThree = new FieldRecord({
  rows: 8,
  columns: 3,
  cells: initCellsFromArray(mockCellsBeforeThree),
})

const mockAfterFieldThree = new FieldRecord({
  rows: 8,
  columns: 3,
  cells: initCellsFromArray(mockCellsAfterThree),
})

describe('cellsMover()', () => {
  test('One on a line', () => {
    const confrontedField = cellsMover(mockBeforeFieldOne, DIRACTIONS.LEFT)
    expect(cellsHaveTheSameValues(confrontedField.cells, mockAfterFieldOne.cells)).toEqual(true)
  })

  test('Two on a line', () => {
    const confrontedField = cellsMover(mockBeforeFieldTwo, DIRACTIONS.LEFT)
    expect(cellsHaveTheSameValues(confrontedField.cells, mockAfterFieldTwo.cells)).toEqual(true)
  })

  test('Three on a line', () => {
    const confrontedField = cellsMover(mockBeforeFieldThree, DIRACTIONS.LEFT)
    expect(cellsHaveTheSameValues(confrontedField.cells, mockAfterFieldThree.cells)).toEqual(true)
  })
})
