import { DIRACTIONS } from '../../models/vector/constants'
import doNextGameStep from '../doNextGameStep'

import { cellsHaveTheSameValues } from '../__utils__'

import {
  mockBeforeFieldOne,
  mockAfterFieldOne,
  mockBeforeFieldTwo,
  mockAfterFieldTwo,
  mockBeforeFieldThree,
  mockAfterFieldThree,
} from '../__mocks__/doNextGameStep'

describe('cellsMover()', () => {
  test('One on a line', () => {
    const confrontedField = doNextGameStep(mockBeforeFieldOne, DIRACTIONS.LEFT)
    expect(cellsHaveTheSameValues(confrontedField.cells, mockAfterFieldOne.cells)).toEqual(true)
  })

  test('Two on a line', () => {
    const confrontedField = doNextGameStep(mockBeforeFieldTwo, DIRACTIONS.LEFT)
    expect(cellsHaveTheSameValues(confrontedField.cells, mockAfterFieldTwo.cells)).toEqual(true)
  })

  test('Three on a line', () => {
    const confrontedField = doNextGameStep(mockBeforeFieldThree, DIRACTIONS.LEFT)
    expect(cellsHaveTheSameValues(confrontedField.cells, mockAfterFieldThree.cells)).toEqual(true)
  })
})
