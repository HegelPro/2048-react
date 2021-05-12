import { formatFieldToTestField, formatTestFieldToField } from '../models/field/helpers.test'
import { DIRACTIONS } from '../models/vector/constants'
import { FieldRecord } from '../models/field/schema'
import cellsColitions from './cellsColitions'

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
  '10',
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
  '100',
  '010',
  '001',
  '020',
  '002',
  '101',
  '102',
]

export const mockBeforeFieldThree: FieldRecord = formatTestFieldToField(mockCellsBeforeThree)

describe('cellsColitions()', () => {
  test('One on a line', () => {
    const confrontedField = cellsColitions(mockBeforeFieldOne, 'DOWN', 'RIGHT')
    expect(formatFieldToTestField(confrontedField)).toEqual(mockCellsAfterOne)
  })

  test('Two on a line', () => {
      const confrontedField = cellsColitions(mockBeforeFieldTwo, 'DOWN', 'RIGHT')
      expect(formatFieldToTestField(confrontedField)).toEqual(mockCellsAfterTwo)
  })

  test('Three on a line', () => {
      const confrontedField = cellsColitions(mockBeforeFieldThree, 'DOWN', 'RIGHT')
      expect(formatFieldToTestField(confrontedField)).toEqual(mockCellsAfterThree)
  })

  test('Move \'DOWN\', \'RIGHT\'', () => {
    const confrontedField = cellsColitions(formatTestFieldToField([
      '11',
      '10',
    ]), 'DOWN', 'RIGHT')
    expect(formatFieldToTestField(confrontedField)).toEqual([
      '02',
      '10',
    ])
  })

  test('Move \'UP\', \'LEFT\'', () => {
    const confrontedField = cellsColitions(formatTestFieldToField([
      '11',
      '01',
    ]), 'UP', 'LEFT')
    expect(formatFieldToTestField(confrontedField)).toEqual([
      '20',
      '01',
    ])
  })

  test('Move \'LEFT\', \'DOWN\'', () => {
    const confrontedField = cellsColitions(formatTestFieldToField([
      '11',
      '01',
    ]), 'LEFT', 'DOWN')
    expect(formatFieldToTestField(confrontedField)).toEqual([
      '10',
      '02',
    ])
  })

  test('Move \'RIGHT\', \'UP\'', () => {
    const confrontedField = cellsColitions(formatTestFieldToField([
      '10',
      '11',
    ]), 'RIGHT', 'UP')
    expect(formatFieldToTestField(confrontedField)).toEqual([
      '20',
      '01',
    ])
  })
})
