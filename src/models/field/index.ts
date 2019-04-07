import { List, Record } from 'immutable'

import { initCells } from './utils'
import {
  FieldInitParams,
  FieldType,
} from './types'

import { CellRecord } from '../cell'
import { Vector } from '../vector'

export class FieldRecord extends Record<FieldType>({
  cells: List(),
  columns: 0,
  rows: 0,
}) {
  getCellPosition(cell: CellRecord): Vector | undefined {
    const position = this.cells.findIndex(cellOne => cellOne.id === cell.id)
    return position !== -1
      ? new Vector({
        x: position % this.columns,
        y: Math.floor((position / this.columns))
      })
      : undefined

  }
  
  getCell(vector: Vector): CellRecord {
    const cell = this.cells.get(vector.x + vector.y * this.columns)
    if (!cell) throw new Error('CellRecord isn\'t exist')
    return cell
  }

  setCell(vector: Vector, cell: CellRecord): FieldRecord {
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
      CellRecord.init({ value: 0 })
    )
    return field.setCell(
      vectorTwo,
      field.getCell(vectorTwo)
        .update('value', value => ++value)
    )
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
