import * as Field from '../models/field'
import { formatFieldToTestField, formatTestFieldToField } from '../models/field.test'
import doNextGameStep from './doNextGameStep'

const mockCellsBeforeOne = [
  '0',
  '1',
  '2',
]

const mockCellsAfterOne = [
  '0',
  '1',
  '2',
]

export const mockBeforeFieldOne: Field.Field = formatTestFieldToField(mockCellsBeforeOne)

const mockCellsBeforeTwo = [
  '00',
  '10',
  '01',
  '11',
  '12',
  '21',
  '22',
]

const mockCellsAfterTwo = [
  '00',
  '01',
  '01',
  '02',
  '12',
  '21',
  '04',
]

export const mockBeforeFieldTwo: Field.Field = formatTestFieldToField(mockCellsBeforeTwo)

const mockCellsBeforeThree = [
  '000',
  '100',
  '010',
  '001',
  '110',
  '011',
  '101',
  '111',
]

const mockCellsAfterThree = [
  '000',
  '001',
  '001',
  '001',
  '002',
  '002',
  '002',
  '012',
]

export const mockBeforeFieldThree: Field.Field = formatTestFieldToField(mockCellsBeforeThree)


describe('doNextGameStep()', () => {
  test('One on a line', () => {
    const confrontedField = doNextGameStep('DOWN', 'RIGHT')(mockBeforeFieldOne)
    expect(formatFieldToTestField(confrontedField)).toEqual(mockCellsAfterOne)
  })

  test('Two on a line', () => {
      const confrontedField = doNextGameStep('DOWN', 'RIGHT')(mockBeforeFieldTwo)
      expect(formatFieldToTestField(confrontedField)).toEqual(mockCellsAfterTwo)
  })

  test('Three on a line', () => {
      const confrontedField = doNextGameStep('DOWN', 'RIGHT')(mockBeforeFieldThree)
      expect(formatFieldToTestField(confrontedField)).toEqual(mockCellsAfterThree)
  })
})
