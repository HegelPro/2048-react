import { DIRACTIONS } from '../../models/vector/constants'
import cellsColitions from '../cellsColitions'

import { cellsHaveTheSameValues } from '../__utils__'
import {
  mockBeforeFieldOne,
  mockAfterFieldOne,
  mockBeforeFieldTwo,
  mockAfterFieldTwo,
  mockBeforeFieldThree,
  mockAfterFieldThree,
} from '../__mocks__/cellsColitions'

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
