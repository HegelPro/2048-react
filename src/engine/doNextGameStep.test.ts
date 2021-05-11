import { formatFieldToTestField, formatTestFieldToField } from '../models/field/helpers.test'
import { DIRACTIONS } from '../models/vector/constants'
import { FieldRecord } from '../models/field/schema'
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

export const mockBeforeFieldOne: FieldRecord = formatTestFieldToField(mockCellsBeforeOne)

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
  '03',
]

export const mockBeforeFieldTwo: FieldRecord = formatTestFieldToField(mockCellsBeforeTwo)

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

export const mockBeforeFieldThree: FieldRecord = formatTestFieldToField(mockCellsBeforeThree)


describe('doNextGameStep()', () => {
  test('One on a line', () => {
    const confrontedField = doNextGameStep(mockBeforeFieldOne, 'DOWN', 'RIGHT')
    expect(formatFieldToTestField(confrontedField)).toEqual(mockCellsAfterOne)
  })

  test('Two on a line', () => {
      const confrontedField = doNextGameStep(mockBeforeFieldTwo, 'DOWN', 'RIGHT')
      expect(formatFieldToTestField(confrontedField)).toEqual(mockCellsAfterTwo)
  })

  test('Three on a line', () => {
      const confrontedField = doNextGameStep(mockBeforeFieldThree, 'DOWN', 'RIGHT')
      expect(formatFieldToTestField(confrontedField)).toEqual(mockCellsAfterThree)
  })
})
