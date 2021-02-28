import { Just, Nothing } from 'purify-ts'
import FieldHelpers from '../models/field/helpers'
import { FieldRecord } from '../models/field/schema'
import { Vector } from '../models/vector/schema'
import VectorHelpers from '../models/vector/helpers'
import curry from '../utils/curry'
import gradToRad from '../utils/gradToRad'
import moveWhileCan from './helpers/moveWhileCan'
import { selectIterationStartPoint } from './iteratetion'

const colitionIfNeed = (field: FieldRecord, postIterPoint: Vector, iterPoint: Vector) => {
  return FieldHelpers.getCell(field, iterPoint)
    .chain(cellOne => FieldHelpers.getCell(field, postIterPoint)
      .chain(cellTwo =>
        cellOne.value > 0 && cellOne.value === cellTwo.value
          ? Just(FieldHelpers.coalitionCells(field, cellOne, cellTwo))
          : Nothing
      )
    )
    .orDefault(field)
}

const cellsColitions = curry((diraction: Vector, field: FieldRecord): FieldRecord => {
  const moveRight = VectorHelpers.plus(diraction)
  const moveLeft = VectorHelpers.minus(diraction)
  const moveLeftWhileCan = moveWhileCan(FieldHelpers.hasCell(field), moveLeft)
  const topDiraction = VectorHelpers.turn(gradToRad(90), 1, diraction)
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
