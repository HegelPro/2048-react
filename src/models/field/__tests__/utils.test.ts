import {initCells} from '../utils'

describe('Field utils', () => {
  test('initCells()', () => {
    expect(initCells(1, 1).length).toEqual(1)
    expect(initCells(2, 1).length).toEqual(2)
    expect(initCells(1, 2).length).toEqual(2)
    expect(initCells(3, 3).length).toEqual(9)

    expect(initCells(3, 3).every(({value}) => value === 0)).toBeTruthy()
  })
})