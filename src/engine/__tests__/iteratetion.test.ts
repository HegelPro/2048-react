import { DIRACTIONS } from '../../models/vector/constants'
import { initCells } from '../../models/field/utils'
import { FieldRecord } from '../../models/field'
import { VectorRecord } from '../../models/vector'
import { selectIterationStartPoint } from '../iteratetion'

const mockRows = 5
const mockColumns = 4

const mockField = new FieldRecord({
  rows: mockRows,
  columns: mockColumns,
  cells: initCells(mockRows, mockColumns),
})

describe('iteratetion()', () => {
  test('One on a line', () => {
    const startIterationPointOne = selectIterationStartPoint(mockField, DIRACTIONS.LEFT)
    expect(startIterationPointOne).toEqual(new VectorRecord({
      x: mockColumns - 1,
      y: 0,
    }))

    const startIterationPointTwo = selectIterationStartPoint(mockField, DIRACTIONS.RIGHT)
    expect(startIterationPointTwo).toEqual(new VectorRecord({
      x: 0,
      y: mockRows - 1,
    }))

    const startIterationPointThree = selectIterationStartPoint(mockField, DIRACTIONS.UP)
    expect(startIterationPointThree).toEqual(new VectorRecord({
      x: 0,
      y: 0,
    }))

    const startIterationPointFour = selectIterationStartPoint(mockField, DIRACTIONS.DOWN)
    expect(startIterationPointFour).toEqual(new VectorRecord({
      x: mockColumns - 1,
      y: mockRows - 1,
    }))
  })
})
