import { Diraction } from '../models/diraction'
import cellsColitions from './cellsColitions'
import cellsMover from './cellsMover'
import {flow} from 'fp-ts/function'

const doNextGameStep = (
  firstDir: Diraction,
  secondDir: Diraction,
) => flow(
  cellsMover(firstDir, secondDir),
  cellsColitions(firstDir, secondDir),
  cellsMover(firstDir, secondDir),
)

export default doNextGameStep
