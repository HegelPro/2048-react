export interface ICellInitParams {
  readonly value: number
}

export interface ICell extends ICellInitParams {
  readonly id: number
  readonly renderId: number
}
