import { List } from 'immutable'

import { CellRecord } from '../cell'
import { Vector } from '../vector';


export interface FieldInitParams {
  columns: number
  rows: number
}

export interface FieldType extends FieldInitParams {
  cells: List<CellRecord>,
}
