import {
  mockAfterFieldOne,
  mockAfterFieldThree,
  mockAfterFieldTwo,
  mockBeforeFieldOne,
  mockBeforeFieldThree,
  mockBeforeFieldTwo,
} from '../__mocks__/cellsColitions'
import { DIRACTIONS } from '../../models/vector/constants'
import cellsColitions from '../cellsColitions'
import { cellsHaveTheSameValues } from '../__utils__'

describe('cellsColitions()', () => {
  test('One on a line', () => {
    const confrontedField = cellsColitions(DIRACTIONS.LEFT)(mockBeforeFieldOne)
    expect(cellsHaveTheSameValues(confrontedField, mockAfterFieldOne)).toEqual(true)
  })

  test('Two on a line', () => {
    const confrontedField = cellsColitions(DIRACTIONS.LEFT)(mockBeforeFieldTwo)
    expect(cellsHaveTheSameValues(confrontedField, mockAfterFieldTwo)).toEqual(true)
  })

  test('Three on a line', () => {
    const confrontedField = cellsColitions(DIRACTIONS.LEFT)(mockBeforeFieldThree)
    expect(cellsHaveTheSameValues(confrontedField, mockAfterFieldThree)).toEqual(true)
  })
})
