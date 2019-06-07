import { DIRACTIONS } from '../../models/vector/constants'
import cellsMover from '../cellsMover'

import { cellsHaveTheSameValues } from '../__utils__'

import {
  mockBeforeFieldOne,
  mockAfterFieldOne,
  mockBeforeFieldTwo,
  mockAfterFieldTwo,
  mockBeforeFieldThree,
  mockAfterFieldThree,
} from '../__mocks__/cellsMover'

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
