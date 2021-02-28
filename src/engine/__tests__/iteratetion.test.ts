import { DIRACTIONS } from '../../models/vector/constants'
import FieldRecordHelper from '../../models/field/helpers'
import { FieldRecord } from '../../models/field/schema'
import { selectIterationStartPoint } from '../iteratetion'

const mockRows = 5
const mockColumns = 4

const mockField: FieldRecord = FieldRecordHelper.initCells(mockRows, mockColumns)

describe('iteratetion()', () => {
  test('One on a line', () => {
    const startIterationPointOne = selectIterationStartPoint(DIRACTIONS.LEFT)(mockField)
    expect(startIterationPointOne).toEqual({
      x: mockColumns - 1,
      y: 0,
    })

    const startIterationPointTwo = selectIterationStartPoint(DIRACTIONS.RIGHT)(mockField)
    expect(startIterationPointTwo).toEqual({
      x: 0,
      y: mockRows - 1,
    })

    const startIterationPointThree = selectIterationStartPoint(DIRACTIONS.UP)(mockField)
    expect(startIterationPointThree).toEqual({
      x: 0,
      y: 0,
    })

    const startIterationPointFour = selectIterationStartPoint(DIRACTIONS.DOWN)(mockField)
    expect(startIterationPointFour).toEqual({
      x: mockColumns - 1,
      y: mockRows - 1,
    })
  })
})
