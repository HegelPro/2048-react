import { FieldRecord } from '../models/field/schema'
import FieldHelpers from '../models/field/helpers'
import { Vector } from '../models/vector/schema'
import VectorHelpers from '../models/vector/helpers'
import { selectIterationStartPoint } from './iteratetion'
import curry from '../utils/curry'
import moveWhileCan from './helpers/moveWhileCan'
import { Just, Nothing } from 'purify-ts'

const colitionIfNeed = (field: FieldRecord, postIterPoint: Vector, iterPoint: Vector) => {
  return FieldHelpers.getCell(field, iterPoint)
    .chain(cellOne => FieldHelpers.getCell(field, postIterPoint)
      .map((cellTwo) => cellOne.value > 0 && cellOne.value === cellTwo.value)
    )
    .chain(flag =>
      flag
        // TODO убрать postIterPoint, iterPoint
        ? Just(FieldHelpers.coalitionCells(field, iterPoint, postIterPoint))
        : Nothing
    )
    .orDefault(field)
}

const cellsColitions = curry((diraction: Vector, field: FieldRecord): FieldRecord => {
  const moveRight = VectorHelpers.plus(diraction)
  const moveLeft = VectorHelpers.minus(diraction)
  const moveLeftWhileCan = moveWhileCan(FieldHelpers.hasCell(field), moveLeft)
  const Deg90 = Math.PI / 2
  const topDiraction = VectorHelpers.turn(Deg90, 1, diraction)
  const moveTop = VectorHelpers.plus(topDiraction)

  let iterPoint = selectIterationStartPoint(diraction)(field)
  let postIterPoint: Vector

  while (FieldHelpers.hasCell(field, iterPoint)) {
    postIterPoint = iterPoint

    if (FieldHelpers.hasCell(field, moveRight(iterPoint))) {
      iterPoint = moveRight(iterPoint)

      field = colitionIfNeed(field, postIterPoint, iterPoint)
    } else {
      iterPoint = moveTop(iterPoint)

      iterPoint = moveLeftWhileCan(iterPoint)
    }
  }

  return field
})

export default cellsColitions
