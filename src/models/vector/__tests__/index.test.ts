import VectorHelpers from '../helpers'
import {DIRACTIONS} from '../constants'

describe('VectorHelpers', () => {
  test('plus', () => {
    expect(VectorHelpers.plus(VectorHelpers.zero)(DIRACTIONS.DOWN)).toEqual({x: 0, y: -1})
    expect(VectorHelpers.plus(VectorHelpers.zero)(DIRACTIONS.UP)).toEqual({x: 0, y: 1})
    expect(VectorHelpers.plus(VectorHelpers.zero)(DIRACTIONS.LEFT)).toEqual({x: -1, y: 0})
    expect(VectorHelpers.plus(VectorHelpers.zero)(DIRACTIONS.RIGHT)).toEqual({x: 1, y: 0})
  })
})