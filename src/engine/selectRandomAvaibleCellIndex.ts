import * as Cell from '../models/cell'
import * as Field from '../models/field'
import * as O from 'fp-ts/Option'
import * as R from 'fp-ts/Random'
import * as Vector from '../models/vector'
import {pipe} from 'fp-ts/function'
import {randomArrayElem} from '../utils/array'

const selectRandomAvaibleCellPoint = (field: Field.Field): Field.Field => {
  return pipe(
    field,
    Field.reduceWithPosition<Vector.Vector[]>(
      [],
      (acc, cell, position) => O.isNone(cell) ? [...acc, position] : acc,
    ),
    randomArrayElem,
    selectedPosition => (
      Field.setCell(
        selectedPosition,
        O.some(Cell.init(R.randomBool() ? 4 : 2)),
      )(field)
    )
  )
}

export default selectRandomAvaibleCellPoint
