import { List } from 'immutable'

import { Cell } from '../cell'
import { Vector } from '../vector';


export interface FieldInitParams {
  columns: number
  rows: number
}

export interface Change {
  start: Vector
  end: Vector
}

export interface Disappear {
  vector: Vector
}

export interface FieldType extends FieldInitParams {
  cells: List<Cell>,
  changes: List<Change | Disappear>
}
