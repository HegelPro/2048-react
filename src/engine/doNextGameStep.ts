import cellsMover from './cellsMover'
import cellsColitions from './cellsColitions'
import { Vector } from '../models/vector/schema'
import { compose } from 'redux'

const doNextGameStep = (diraction: Vector) =>
  compose(
    cellsMover(diraction),
    cellsColitions(diraction),
    cellsMover(diraction),
  )

export default doNextGameStep
