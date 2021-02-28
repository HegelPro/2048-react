import {
  mockAfterFieldOne,
  mockAfterFieldThree,
  mockAfterFieldTwo,
  mockBeforeFieldOne,
  mockBeforeFieldThree,
  mockBeforeFieldTwo,
} from '../__mocks__/cellsMover'
import { DIRACTIONS } from '../../models/vector/constants'
import { cellsHaveTheSameValues } from '../__utils__'
import cellsMover from '../cellsMover'

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
