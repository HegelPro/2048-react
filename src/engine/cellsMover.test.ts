
import { formatFieldToTestField, formatTestFieldToField } from '../models/field/helpers.test'
import { FieldRecord } from '../models/field/schema'
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
  '11',
  '12',
  '21',
  '22',
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
  '011',
  '011',
  '011',
  '111',
]

export const mockBeforeFieldThree: FieldRecord = formatTestFieldToField(mockCellsBeforeThree)

describe('cellsMover()', () => {
    test('One on a line', () => {
      const confrontedField = cellsMover(mockBeforeFieldOne, 'DOWN', 'RIGHT')
      expect(formatFieldToTestField(confrontedField)).toEqual(mockCellsAfterOne)
    })
  
    test('Two on a line', () => {
        const confrontedField = cellsMover(mockBeforeFieldTwo, 'DOWN', 'RIGHT')
        expect(formatFieldToTestField(confrontedField)).toEqual(mockCellsAfterTwo)
    })
  
    test('Three on a line', () => {
        const confrontedField = cellsMover(mockBeforeFieldThree, 'DOWN', 'RIGHT')
        expect(formatFieldToTestField(confrontedField)).toEqual(mockCellsAfterThree)
    })

    test('Move \'DOWN\', \'RIGHT\'', () => {
      const confrontedField = cellsMover(formatTestFieldToField([
        '10',
        '10',
      ]), 'DOWN', 'RIGHT')
      expect(formatFieldToTestField(confrontedField)).toEqual([
        '01',
        '01',
      ])
    })

    test('Move \'UP\', \'LEFT\'', () => {
      const confrontedField = cellsMover(formatTestFieldToField([
        '01',
        '01',
      ]), 'UP', 'LEFT')
      expect(formatFieldToTestField(confrontedField)).toEqual([
        '10',
        '10',
      ])
    })

    test('Move \'LEFT\', \'DOWN\'', () => {
      const confrontedField = cellsMover(formatTestFieldToField([
        '11',
        '00',
      ]), 'LEFT', 'DOWN')
      expect(formatFieldToTestField(confrontedField)).toEqual([
        '00',
        '11',
      ])
    })

    test('Move \'RIGHT\', \'UP\'', () => {
      const confrontedField = cellsMover(formatTestFieldToField([
        '00',
        '11',
      ]), 'RIGHT', 'UP')
      expect(formatFieldToTestField(confrontedField)).toEqual([
        '11',
        '00',
      ])
    })
  })
  