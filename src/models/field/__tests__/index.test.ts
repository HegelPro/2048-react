import FieldRecordHelper from '../helpers'
import CellRecordHelper from '../../cell/helpers'

describe('FieldRecordHelper', () => {
  const mockFieldOne = FieldRecordHelper.init({columns: 1, rows: 1})
  const mockFieldTwo = FieldRecordHelper.init({columns: 2, rows: 1})
  const mockFieldThree = FieldRecordHelper.init({columns: 1, rows: 2})
  const mockFieldFour = FieldRecordHelper.init({columns: 3, rows: 3})

  test('initCells()', () => {
    const zeroMatrix11 = FieldRecordHelper.initCells(1, 1).map(row => row.map(({value}) => value))
    const zeroMatrix21 = FieldRecordHelper.initCells(2, 1).map(row => row.map(({value}) => value))
    const zeroMatrix12 = FieldRecordHelper.initCells(1, 2).map(row => row.map(({value}) => value))
    const zeroMatrix33 = FieldRecordHelper.initCells(3, 3).map(row => row.map(({value}) => value))
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

    expect(FieldRecordHelper.initCells(3, 3).every(row => row.every(({value}) => value === 0))).toBeTruthy()
  })

  // test('init()', () => {
  //   expect(mockFieldOne.columns).toEqual(1)
  //   expect(mockFieldOne.rows).toEqual(1)
  //   expect(mockFieldOne.cells.every(({value}) => value === 0)).toBeTruthy()

  //   expect(mockFieldTwo.columns).toEqual(2)
  //   expect(mockFieldTwo.rows).toEqual(1)
  //   expect(mockFieldTwo.cells.every(({value}) => value === 0)).toBeTruthy()

  //   expect(mockFieldThree.columns).toEqual(1)
  //   expect(mockFieldThree.rows).toEqual(2)
  //   expect(mockFieldThree.cells.every(({value}) => value === 0)).toBeTruthy()

  //   expect(mockFieldFour.columns).toEqual(3)
  //   expect(mockFieldFour.rows).toEqual(3)
  //   expect(mockFieldFour.cells.every(({value}) => value === 0)).toBeTruthy()
  // })

  test('setCell()', () => {
    const mockLocalFieldRecordOne = FieldRecordHelper.setCellByPosition(mockFieldOne, {x: 0, y: 0}, CellRecordHelper.init({value: 1}))
    expect(mockLocalFieldRecordOne.cells[0][0].value).toEqual(1)
    expect(mockLocalFieldRecordOne.cells[0].length).toEqual(1)
    expect(mockLocalFieldRecordOne.cells.length).toEqual(1)
    expect(mockLocalFieldRecordOne.rows).toEqual(1)
    expect(mockLocalFieldRecordOne.columns).toEqual(1)
    expect(mockLocalFieldRecordOne).not.toBe(mockFieldOne)

    const mockLocalFieldRecordTwo = FieldRecordHelper.setCellByPosition(mockFieldOne, {x: 1, y: 1}, CellRecordHelper.init({value: 1}))
    expect(mockLocalFieldRecordTwo.cells[0][0].value).toEqual(0)
    expect(mockLocalFieldRecordTwo.cells[0].length).toEqual(1)
    expect(mockLocalFieldRecordTwo.cells.length).toEqual(1)
    expect(mockLocalFieldRecordTwo.rows).toEqual(1)
    expect(mockLocalFieldRecordTwo.columns).toEqual(1)
  })
})