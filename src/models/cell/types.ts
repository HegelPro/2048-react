import { VectorRecord } from '../vector'

export interface ICellInitParams {
  value: number
}

export interface ICell extends ICellInitParams {
  id: number
  renderId: number
}
