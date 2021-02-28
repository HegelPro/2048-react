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
    const confrontedField = cellsMover(DIRACTIONS.LEFT)(mockBeforeFieldOne)
    expect(cellsHaveTheSameValues(confrontedField, mockAfterFieldOne)).toEqual(true)
  })

  test('Two on a line', () => {
    const confrontedField = cellsMover(DIRACTIONS.LEFT)(mockBeforeFieldTwo)
    expect(cellsHaveTheSameValues(confrontedField, mockAfterFieldTwo)).toEqual(true)
  })

  test('Three on a line', () => {
    const confrontedField = cellsMover(DIRACTIONS.LEFT)(mockBeforeFieldThree)
    expect(cellsHaveTheSameValues(confrontedField, mockAfterFieldThree)).toEqual(true)
  })
})
