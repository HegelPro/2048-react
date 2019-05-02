import { List } from 'immutable'

import { CellRecord } from '../cell'

export interface IFieldInitParams {
  columns: number
  rows: number
}

export interface IField extends IFieldInitParams {
  cells: List<CellRecord>,
}
