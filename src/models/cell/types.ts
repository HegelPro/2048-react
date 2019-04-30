import { Vector } from '../vector'

export interface ICellInitParams {
  value: number
}

export interface ICellType extends ICellInitParams {
  changedByVector: Vector
  id: number
  renderId: number
}
