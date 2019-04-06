import { List, Record } from 'immutable'

import { initCells } from './utils'
import {
  FieldInitParams,
  FieldType,
  Change,
} from './types'

import { Cell } from '../cell'
import { Vector } from '../vector'

export class FieldRecord extends Record<FieldType>({
  cells: List(),
  columns: 0,
  rows: 0,
  changes: List(),
}) {
  getCell(vector: Vector): Cell {
    const cell = this.cells.get(vector.x + vector.y * this.columns)
    if (!cell) throw new Error('Cell isn\'t exist')
    return cell
  }

  setCell(vector: Vector, cell: Cell): FieldRecord {
    return this.update(
      'cells',
      cells => cells.set(vector.x + vector.y * this.columns, cell))
  }

  swapeCells(vectorOne: Vector, vectorTwo: Vector): FieldRecord {
    const savedCellForSwape = this.getCell(vectorOne)
    let field = this.setCell(
      vectorOne,
      this.getCell(vectorTwo)
    )
    return field.setCell(
      vectorTwo,
      savedCellForSwape
    )
  }

  coalitionCells(vectorOne: Vector, vectorTwo: Vector): FieldRecord {
    let field = this.setCell(
      vectorOne,
      Cell.init({ value: 0 })
    )
    return field.setCell(
      vectorTwo,
      field.getCell(vectorTwo)
        .update('value', value => ++value)
    )
  }

  pushChange(change: Change) {
    return this.set('changes', this.changes.push(change))
  }

  hasCell(vector: Vector): boolean {
    if (
      vector.x >= 0
      && vector.y >= 0
      && vector.x < this.columns 
      && vector.y < this.rows 
    ) {
      return true
    }
    return false
  }

  static init({ columns, rows }: FieldInitParams): FieldRecord {
    return new FieldRecord({
      columns,
      rows,
      cells: initCells(columns, rows),
    })
  }
}
