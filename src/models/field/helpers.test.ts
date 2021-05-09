import CellRecordHelper from '../cell/helpers'
import FieldHelpers from './helpers'
import { FieldRecord } from './schema'

type TestFieldRecordFormat = number[][]

export const formatFieldToTestField = (field: FieldRecord): TestFieldRecordFormat => (
    field.map(row => row.map(cell => cell?.value || 0))
)

export const formatTestFieldToField = (array: TestFieldRecordFormat): FieldRecord => (
    array.map(row => row.map(num => num !== 0 ? CellRecordHelper.init(num) : undefined))
)

describe('FieldHelpers', () => {
  const mockFieldOne = FieldHelpers.init({columns: 1, rows: 1})

  test('init()', () => {
    const zeroMatrix11 = formatFieldToTestField(FieldHelpers.init({rows: 1, columns: 1}))
    const zeroMatrix21 = formatFieldToTestField(FieldHelpers.init({rows: 1, columns: 2}))
    const zeroMatrix12 = formatFieldToTestField(FieldHelpers.init({rows: 2, columns: 1}))
    const zeroMatrix33 = formatFieldToTestField(FieldHelpers.init({rows: 3, columns: 3}))
    expect(zeroMatrix11).toEqual([[0]])
    expect(zeroMatrix21).toEqual([
      [0],
      [0],
    ])
    expect(zeroMatrix12).toEqual([
      [0, 0],
    ])
    expect(zeroMatrix33).toEqual([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ])

    expect(FieldHelpers.init({rows: 3, columns: 3}).every(row => row.every(cell => cell === undefined))).toBeTruthy()
  })

  test('setCell()', () => {
    const mockLocalFieldRecordOne = FieldHelpers.setCellByPosition(mockFieldOne, {x: 0, y: 0}, CellRecordHelper.init(1))
    expect(mockLocalFieldRecordOne[0][0]?.value).toEqual(1)
    expect(mockLocalFieldRecordOne[0].length).toEqual(1)
    expect(mockLocalFieldRecordOne.length).toEqual(1)
    expect(mockLocalFieldRecordOne).not.toBe(mockFieldOne)

    const mockLocalFieldRecordTwo = FieldHelpers.setCellByPosition(mockFieldOne, {x: 1, y: 1}, CellRecordHelper.init(1))
    expect(mockLocalFieldRecordTwo[0][0]).toEqual(undefined)
    expect(mockLocalFieldRecordTwo[0].length).toEqual(1)
    expect(mockLocalFieldRecordTwo.length).toEqual(1)
  })
})