import CellRecordHelper from '../cell/helpers'
import FieldHelpers from './helpers'
import { FieldRecord } from './schema'
import { Vector } from '../vector/schema'
import { Just, Nothing } from 'purify-ts'

type TestFieldRecordFormat = string[]

export const formatFieldToTestField = (field: FieldRecord): TestFieldRecordFormat => (
    field.map(row => row.map(cell => cell.map(({value}) => value).orDefault(0)).join(''))
) 

export const formatTestFieldToField = (array: TestFieldRecordFormat): FieldRecord => (
    array.map(row => row.split('').map(Number).map(num => num !== 0 ? Just(CellRecordHelper.init(num)) : Nothing))
)

describe('FieldHelpers', () => {
  const mockFieldOne = FieldHelpers.init({columns: 1, rows: 1})

  test('init()', () => {
    const zeroMatrix11 = formatFieldToTestField(FieldHelpers.init({rows: 1, columns: 1}))
    const zeroMatrix21 = formatFieldToTestField(FieldHelpers.init({rows: 1, columns: 2}))
    const zeroMatrix12 = formatFieldToTestField(FieldHelpers.init({rows: 2, columns: 1}))
    const zeroMatrix33 = formatFieldToTestField(FieldHelpers.init({rows: 3, columns: 3}))
    expect(zeroMatrix11).toEqual(['0'])
    expect(zeroMatrix21).toEqual([
      '0',
      '0',
    ])
    expect(zeroMatrix12).toEqual([
      '00',
    ])
    expect(zeroMatrix33).toEqual([
      '000',
      '000',
      '000',
    ])

    expect(FieldHelpers.init({rows: 3, columns: 3}).every(row => row.every(cell => cell.isNothing))).toBeTruthy()
  })

  test('setCell()', () => {
    const mockLocalFieldRecordOne = FieldHelpers.setCellByPosition(mockFieldOne, {x: 0, y: 0}, Just(CellRecordHelper.init(1)))
    expect(mockLocalFieldRecordOne[0][0].extract()?.value).toEqual(1)
    expect(mockLocalFieldRecordOne[0].length).toEqual(1)
    expect(mockLocalFieldRecordOne.length).toEqual(1)
    expect(mockLocalFieldRecordOne).not.toBe(mockFieldOne)

    const mockLocalFieldRecordTwo = FieldHelpers.setCellByPosition(mockFieldOne, {x: 1, y: 1}, Just(CellRecordHelper.init(1)))
    expect(mockLocalFieldRecordTwo[0][0].extract()).toEqual(undefined)
    expect(mockLocalFieldRecordTwo[0].length).toEqual(1)
    expect(mockLocalFieldRecordTwo.length).toEqual(1)
  })

  test('swapCells()', () => {
    const mockFieldOne = formatTestFieldToField(['00'])
    const mockFieldTwo = formatTestFieldToField(['01'])
    const mockFieldThree = formatTestFieldToField(['10'])
    const mockFieldFour = formatTestFieldToField(['11'])

    const vectorOne: Vector = {y: 0, x: 0}
    const vectorTwo: Vector = {y: 0, x: 1}
    const vectorThreeOut: Vector = {y: 1, x: 0}

    expect(formatFieldToTestField(FieldHelpers.swapeCells(mockFieldOne, vectorOne, vectorTwo))).toEqual(['00'])
    expect(formatFieldToTestField(FieldHelpers.swapeCells(mockFieldTwo, vectorOne, vectorTwo))).toEqual(['10'])
    expect(formatFieldToTestField(FieldHelpers.swapeCells(mockFieldThree, vectorOne, vectorTwo))).toEqual(['01'])
    expect(formatFieldToTestField(FieldHelpers.swapeCells(mockFieldFour, vectorOne, vectorTwo))).toEqual(['11'])

    expect(formatFieldToTestField(FieldHelpers.swapeCells(mockFieldTwo, vectorOne, vectorThreeOut))).toEqual(['01'])
  })

  test('swapCells()', () => {
    const mockFieldOne = formatTestFieldToField(['00'])
    const mockFieldTwo = formatTestFieldToField(['01'])
    const mockFieldThree = formatTestFieldToField(['10'])
    const mockFieldFour = formatTestFieldToField(['11'])

    const vectorOne: Vector = {y: 0, x: 0}
    const vectorTwo: Vector = {y: 0, x: 1}
    const vectorThreeOut: Vector = {y: 1, x: 0}

    expect(formatFieldToTestField(FieldHelpers.coalitionCells(mockFieldOne, vectorOne, vectorTwo))).toEqual(['00'])
    expect(formatFieldToTestField(FieldHelpers.coalitionCells(mockFieldTwo, vectorOne, vectorTwo))).toEqual(['01'])
    expect(formatFieldToTestField(FieldHelpers.coalitionCells(mockFieldThree, vectorOne, vectorTwo))).toEqual(['10'])
    expect(formatFieldToTestField(FieldHelpers.coalitionCells(mockFieldFour, vectorOne, vectorTwo))).toEqual(['02'])

    expect(formatFieldToTestField(FieldHelpers.swapeCells(mockFieldTwo, vectorOne, vectorThreeOut))).toEqual(['01'])
  })
})