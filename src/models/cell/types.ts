import { VectorRecord } from '../vector'

export interface ICellInitParams {
  value: number
}

export interface ICell extends ICellInitParams {
  changedByVector: VectorRecord
  id: number
  renderId: number
}
