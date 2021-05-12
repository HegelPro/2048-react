
import * as Field from '../models/field'
import { formatFieldToTestField, formatTestFieldToField } from '../models/field.test'
import cellsMover from './cellsMover'

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
  '11',
  '12',
  '21',
  '22',
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
  '011',
  '011',
  '011',
  '111',
]

export const mockBeforeFieldThree: Field.Field = formatTestFieldToField(mockCellsBeforeThree)

describe('cellsMover()', () => {
    test('One on a line', () => {
      const confrontedField = cellsMover('DOWN', 'RIGHT')(mockBeforeFieldOne)
      expect(formatFieldToTestField(confrontedField)).toEqual(mockCellsAfterOne)
    })
  
    test('Two on a line', () => {
        const confrontedField = cellsMover('DOWN', 'RIGHT')(mockBeforeFieldTwo)
        expect(formatFieldToTestField(confrontedField)).toEqual(mockCellsAfterTwo)
    })
  
    test('Three on a line', () => {
        const confrontedField = cellsMover('DOWN', 'RIGHT')(mockBeforeFieldThree)
        expect(formatFieldToTestField(confrontedField)).toEqual(mockCellsAfterThree)
    })

    test('Move \'DOWN\', \'RIGHT\'', () => {
      const confrontedField = cellsMover('DOWN', 'RIGHT')(formatTestFieldToField([
        '10',
        '10',
      ]))
      expect(formatFieldToTestField(confrontedField)).toEqual([
        '01',
        '01',
      ])
    })

    test('Move \'UP\', \'LEFT\'', () => {
      const confrontedField = cellsMover('UP', 'LEFT')(formatTestFieldToField([
        '01',
        '01',
      ]))
      expect(formatFieldToTestField(confrontedField)).toEqual([
        '10',
        '10',
      ])
    })

    test('Move \'LEFT\', \'DOWN\'', () => {
      const confrontedField = cellsMover('LEFT', 'DOWN')(formatTestFieldToField([
        '11',
        '00',
      ]))
      expect(formatFieldToTestField(confrontedField)).toEqual([
        '00',
        '11',
      ])
    })

    test('Move \'RIGHT\', \'UP\'', () => {
      const confrontedField = cellsMover('RIGHT', 'UP')(formatTestFieldToField([
        '00',
        '11',
      ]))
      expect(formatFieldToTestField(confrontedField)).toEqual([
        '11',
        '00',
      ])
    })
  })
  