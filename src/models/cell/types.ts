import { Vector } from '../vector'

export interface CellInitParams {
  value: number
}

export interface CellType extends CellInitParams {
  changedByVector: Vector
  id: number
}
