import { Just, Nothing } from 'purify-ts'
import FieldHelpers from '../models/field/helpers'
import { FieldRecord } from '../models/field/schema'
import { Vector } from '../models/vector/schema'
import VectorHelpers from '../models/vector/helpers'
import curry from '../utils/curry'
import gradToRad from '../utils/gradToRad'
import moveWhileCan from './helpers/moveWhileCan'
import { selectIterationStartPoint } from './iteratetion'

const moveRow = (
  field: FieldRecord,
  moveLeftWhileCan: (vector: Vector) => Vector,
  postIterPoint: Vector,
  iterPoint: Vector,
): [FieldRecord, Vector] => {
  return FieldHelpers.getCell(field, iterPoint)
    .chain(cellOne => FieldHelpers.getCell(field, postIterPoint)
      .chain(cellTwo => {
        if (cellOne.value  > 0 && cellTwo.value === 0) {
          const newfield = FieldHelpers.swapeCells(field, cellOne, cellTwo)
  
          const newiterPoint = moveLeftWhileCan(iterPoint)
          return Just(moveRow(newfield, moveLeftWhileCan, postIterPoint, newiterPoint))
        }
        return Nothing
      })
    )
    .orDefault([field, iterPoint])
}

const cellsMover = curry((diraction: Vector, field: FieldRecord): FieldRecord => {
  const moveRight = VectorHelpers.plus(diraction)
  const moveLeft = VectorHelpers.minus(diraction)
  const topDiraction = VectorHelpers.turn(gradToRad(90), 1, diraction)
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
