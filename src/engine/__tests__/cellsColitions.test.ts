import {
  mockAfterFieldOne,
  mockAfterFieldThree,
  mockAfterFieldTwo,
  mockBeforeFieldOne,
  mockBeforeFieldThree,
  mockBeforeFieldTwo,
} from '../__mocks__/cellsColitions'
import { DIRACTIONS } from '../../models/vector/constants'
import FieldHelpers from '../../models/field/helpers'
import cellsColitions from '../cellsColitions'

describe('cellsColitions()', () => {
  test('One on a line', () => {
    const confrontedField = cellsColitions(DIRACTIONS.LEFT)(mockBeforeFieldOne)
    expect(FieldHelpers.equals(confrontedField, mockAfterFieldOne)).toEqual(true)
  })

  test('Two on a line', () => {
    const confrontedField = cellsColitions(DIRACTIONS.LEFT)(mockBeforeFieldTwo)
    expect(FieldHelpers.equals(confrontedField, mockAfterFieldTwo)).toEqual(true)
  })

  test('Three on a line', () => {
    const confrontedField = cellsColitions(DIRACTIONS.LEFT)(mockBeforeFieldThree)
    expect(FieldHelpers.equals(confrontedField, mockAfterFieldThree)).toEqual(true)
  })
})
