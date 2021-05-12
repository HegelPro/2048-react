import * as Field from '../models/field'
import { formatFieldToTestField, formatTestFieldToField } from '../models/field.test'
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
  '10',
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
  '100',
  '010',
  '001',
  '020',
  '002',
  '101',
  '102',
]

export const mockBeforeFieldThree: Field.Field = formatTestFieldToField(mockCellsBeforeThree)

describe('cellsColitions()', () => {
  test('One on a line', () => {
    const confrontedField = cellsColitions('DOWN', 'RIGHT')(mockBeforeFieldOne)
    expect(formatFieldToTestField(confrontedField)).toEqual(mockCellsAfterOne)
  })

  test('Two on a line', () => {
      const confrontedField = cellsColitions('DOWN', 'RIGHT')(mockBeforeFieldTwo)
      expect(formatFieldToTestField(confrontedField)).toEqual(mockCellsAfterTwo)
  })

  test('Three on a line', () => {
      const confrontedField = cellsColitions('DOWN', 'RIGHT')(mockBeforeFieldThree)
      expect(formatFieldToTestField(confrontedField)).toEqual(mockCellsAfterThree)
  })

  test('Move \'DOWN\', \'RIGHT\'', () => {
    const confrontedField = cellsColitions('DOWN', 'RIGHT')(formatTestFieldToField([
      '11',
      '10',
    ]))
    expect(formatFieldToTestField(confrontedField)).toEqual([
      '02',
      '10',
    ])
  })

  test('Move \'UP\', \'LEFT\'', () => {
    const confrontedField = cellsColitions('UP', 'LEFT')(formatTestFieldToField([
      '11',
      '01',
    ]))
    expect(formatFieldToTestField(confrontedField)).toEqual([
      '20',
      '01',
    ])
  })

  test('Move \'LEFT\', \'DOWN\'', () => {
    const confrontedField = cellsColitions('LEFT', 'DOWN')(formatTestFieldToField([
      '11',
      '01',
    ]))
    expect(formatFieldToTestField(confrontedField)).toEqual([
      '10',
      '02',
    ])
  })

  test('Move \'RIGHT\', \'UP\'', () => {
    const confrontedField = cellsColitions('RIGHT', 'UP')(formatTestFieldToField([
      '10',
      '11',
    ]))
    expect(formatFieldToTestField(confrontedField)).toEqual([
      '20',
      '01',
    ])
  })
})
