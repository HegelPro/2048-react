import {
  mockAfterFieldOne,
  mockAfterFieldThree,
  mockAfterFieldTwo,
  mockBeforeFieldOne,
  mockBeforeFieldThree,
  mockBeforeFieldTwo,
} from '../__mocks__/doNextGameStep'
import { DIRACTIONS } from '../../models/vector/constants'
import FieldHelpers from '../../models/field/helpers'
import doNextGameStep from '../doNextGameStep'

describe('cellsMover()', () => {
  test('One on a line', () => {
    const confrontedField = doNextGameStep(DIRACTIONS.LEFT)(mockBeforeFieldOne)
    expect(FieldHelpers.equals(confrontedField, mockAfterFieldOne)).toEqual(true)
  })

  test('Two on a line', () => {
    const confrontedField = doNextGameStep(DIRACTIONS.LEFT)(mockBeforeFieldTwo)
    expect(FieldHelpers.equals(confrontedField, mockAfterFieldTwo)).toEqual(true)
  })

  test('Three on a line', () => {
    const confrontedField = doNextGameStep(DIRACTIONS.LEFT)(mockBeforeFieldThree)
    expect(FieldHelpers.equals(confrontedField, mockAfterFieldThree)).toEqual(true)
  })
})
