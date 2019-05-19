import { FieldRecord } from '../../../models/field'
import { DIRACTIONS } from '../../../models/vector/constants'
import cellsColitions from '../cellsColitions'

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
  1, 0,
  0, 1,
  0, 2,
  1, 2,
  2, 1,
  0, 3,
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
  1, 0, 0,
  0, 1, 0,
  0, 0, 1,
  0, 2, 0,
  0, 0, 2,
  1, 0, 1,
  1, 0, 2,
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

describe('Engine utils:', () => {
  describe('cellsColitions()', () => {
    test('One on a line', () => {
      const confrontedField = cellsColitions(mockBeforeFieldOne, DIRACTIONS.LEFT)
      expect(cellsHaveTheSameValues(confrontedField.cells, mockAfterFieldOne.cells)).toEqual(true)
    })

    test('Two on a line', () => {
      const confrontedField = cellsColitions(mockBeforeFieldTwo, DIRACTIONS.LEFT)
      expect(cellsHaveTheSameValues(confrontedField.cells, mockAfterFieldTwo.cells)).toEqual(true)
    })

    test('Three on a line', () => {
      const confrontedField = cellsColitions(mockBeforeFieldThree, DIRACTIONS.LEFT)
      expect(cellsHaveTheSameValues(confrontedField.cells, mockAfterFieldThree.cells)).toEqual(true)
    })
  })
})

// TODO need put in different import file
import { List } from 'immutable'

import { CellRecord } from '../../../models/cell'

export function initCellsFromArray(array: number[]): List<CellRecord> {
  return List(array.map((cellValue) => CellRecord.init({ value: cellValue })))
}

export function cellsHaveTheSameValues(
  fieldOneCells: List<CellRecord>,
  fieldTwoCells: List<CellRecord>,
): boolean {
  return fieldOneCells.every((oneCell, cellOneIndex) => {
    const twoCell = fieldTwoCells.get(cellOneIndex)
    if (twoCell) {
      if (oneCell.value === twoCell.value) {
        return true
      }
      return false
    }
    return false
  })
}