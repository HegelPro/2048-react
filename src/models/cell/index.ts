import { Record } from 'immutable'

import { CellType, CellInitParams } from './types'

import { Vector } from '../vector'


export class Cell extends Record<CellType>({
  changedByVector: new Vector(),
  value: 0,
  id: 0,
}) {
  static init(initParams: CellInitParams): Cell {
    return new Cell({
      value: initParams.value,
      id: Math.random(),
    })
  }
}
