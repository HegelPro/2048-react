import CellRecordHelper from '../../cell/helpers'
import FieldHelpers from '../helpers'

describe('FieldHelpers', () => {
  const mockFieldOne = FieldHelpers.init({columns: 1, rows: 1})

  test('init()', () => {
    const zeroMatrix11 = FieldHelpers.init({rows: 1, columns: 1}).map(row => row.map(({value}) => value))
    const zeroMatrix21 = FieldHelpers.init({rows: 1, columns: 2}).map(row => row.map(({value}) => value))
    const zeroMatrix12 = FieldHelpers.init({rows: 2, columns: 1}).map(row => row.map(({value}) => value))
    const zeroMatrix33 = FieldHelpers.init({rows: 3, columns: 3}).map(row => row.map(({value}) => value))
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

    expect(FieldHelpers.init({rows: 3, columns: 3}).every(row => row.every(({value}) => value === 0))).toBeTruthy()
  })

  test('setCell()', () => {
    const mockLocalFieldRecordOne = FieldHelpers.setCellByPosition(mockFieldOne, {x: 0, y: 0}, CellRecordHelper.init({value: 1}))
    expect(mockLocalFieldRecordOne[0][0].value).toEqual(1)
    expect(mockLocalFieldRecordOne[0].length).toEqual(1)
    expect(mockLocalFieldRecordOne.length).toEqual(1)
    expect(mockLocalFieldRecordOne).not.toBe(mockFieldOne)

    const mockLocalFieldRecordTwo = FieldHelpers.setCellByPosition(mockFieldOne, {x: 1, y: 1}, CellRecordHelper.init({value: 1}))
    expect(mockLocalFieldRecordTwo[0][0].value).toEqual(0)
    expect(mockLocalFieldRecordTwo[0].length).toEqual(1)
    expect(mockLocalFieldRecordTwo.length).toEqual(1)
  })
})