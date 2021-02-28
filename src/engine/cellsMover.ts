import { selectIterationStartPoint } from './iteratetion'
import { FieldRecord } from '../models/field/schema'
import FieldHelpers from '../models/field/helpers'
import { Vector } from '../models/vector/schema'
import VectorHelpers from '../models/vector/helpers'
import curry from '../utils/curry'
import moveWhileCan from './helpers/moveWhileCan'
import { Just, Nothing } from 'purify-ts'

const moveRow = (
  field: FieldRecord,
  moveLeftWhileCan: (vector: Vector) => Vector,
  postIterPoint: Vector,
  iterPoint: Vector,
): [FieldRecord, Vector] => {
  return FieldHelpers.getCell(field, iterPoint)
    .map(({value}) => value  > 0)
    .chain(flagOne => FieldHelpers.getCell(field, postIterPoint)
      .map(({value}) => value === 0)
      .map(flagTwo => flagOne && flagTwo)
    )
    .chain(flag => {
      if (flag) {
        // TODO убрать postIterPoint, iterPoint
        const newfield = FieldHelpers.swapeCells(field, postIterPoint, iterPoint)

        const newiterPoint = moveLeftWhileCan(iterPoint)
        return Just(moveRow(newfield, moveLeftWhileCan, postIterPoint, newiterPoint))
      } else {
        return Nothing
      }
    })
    .orDefault([field, iterPoint])
}

const Deg90 = Math.PI / 2

const cellsMover = curry((diraction: Vector, field: FieldRecord): FieldRecord => {
  const moveRight = VectorHelpers.plus(diraction)
  const moveLeft = VectorHelpers.minus(diraction)
  const topDiraction = VectorHelpers.turn(Deg90, 1, diraction)
  const moveTop = VectorHelpers.plus(topDiraction)

  let iterPoint = selectIterationStartPoint(diraction)(field)
  let postIterPoint = iterPoint

  while (FieldHelpers.hasCell(field, iterPoint)) {
    postIterPoint = iterPoint

    if (FieldHelpers.hasCell(field, moveRight(iterPoint))) {
      iterPoint = moveRight(iterPoint)

      const [newField, newIterPoint] = moveRow(
        field,
        moveWhileCan(FieldHelpers.hasCell(field), moveLeft),
        postIterPoint,
        iterPoint,
      )

      field = newField

      iterPoint = newIterPoint
    } else {
      iterPoint = moveTop(iterPoint)

      iterPoint = moveWhileCan(FieldHelpers.hasCell(field), moveLeft)(iterPoint)
    }
  }

  return field
})
  

export default cellsMover
