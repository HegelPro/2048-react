import { DIRACTIONS } from '../models/vector/constants'
import FieldHelpers from '../models/field/helpers'
import { FieldRecord } from '../models/field/schema'
import cellsMover from './cellsMover'
import { formatTestFieldToField } from '../models/field/helpers.test'

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

export const mockBeforeFieldOne: FieldRecord = formatTestFieldToField(mockCellsBeforeOne)

export const mockAfterFieldOne: FieldRecord = formatTestFieldToField(mockCellsAfterOne)

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

export const mockBeforeFieldTwo: FieldRecord = formatTestFieldToField(mockCellsBeforeTwo)

export const mockAfterFieldTwo: FieldRecord = formatTestFieldToField(mockCellsAfterTwo)

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

export const mockBeforeFieldThree: FieldRecord = formatTestFieldToField(mockCellsBeforeThree)

export const mockAfterFieldThree: FieldRecord = formatTestFieldToField(mockCellsAfterThree)


describe('cellsMover()', () => {
  test('One on a line', () => {
    const confrontedField = cellsMover(DIRACTIONS.LEFT)(mockBeforeFieldOne)
    expect(FieldHelpers.equals(confrontedField, mockAfterFieldOne)).toEqual(true)
  })

  test('Two on a line', () => {
    const confrontedField = cellsMover(DIRACTIONS.LEFT)(mockBeforeFieldTwo)
    expect(FieldHelpers.equals(confrontedField, mockAfterFieldTwo)).toEqual(true)
  })

  test('Three on a line', () => {
    const confrontedField = cellsMover(DIRACTIONS.LEFT)(mockBeforeFieldThree)
    expect(FieldHelpers.equals(confrontedField, mockAfterFieldThree)).toEqual(true)
  })
})
