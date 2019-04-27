import { List, Record } from 'immutable'

import { initCells } from './utils'
import {
  IFieldInitParams,
  IFieldType,
} from './types'

import { CellRecord } from '../cell'
import { Vector } from '../vector'

export class FieldRecord extends Record<IFieldType>({
  cells: List(),
  columns: 0,
  rows: 0,
}) {
  public static init({ columns, rows }: IFieldInitParams): FieldRecord {
    return new FieldRecord({
      columns,
      rows,
      cells: initCells(columns, rows),
    })
  }

  public getCellPosition(cell: CellRecord): Vector | undefined {
    const position = this.cells.findIndex((cellOne) => cellOne.id === cell.id)
    return position !== -1
      ? new Vector({
        x: position % this.columns,
        y: Math.floor((position / this.columns)),
      })
      : undefined
  }

  public getCell(vector: Vector): CellRecord {
    const cell = this.cells.get(vector.x + vector.y * this.columns)
    if (!cell) {
      throw new Error('CellRecord isn\'t exist')
    }
    return cell
  }

  public setCell(vector: Vector, cell: CellRecord): FieldRecord {
    return this.update(
      'cells',
      (cells) => cells.set(vector.x + vector.y * this.columns, cell))
  }

  public swapeCells(vectorOne: Vector, vectorTwo: Vector): FieldRecord {
    const savedCellForSwape = this.getCell(vectorOne)
    const field = this.setCell(
      vectorOne,
      this.getCell(vectorTwo),
    )
    return field.setCell(
      vectorTwo,
      savedCellForSwape,
    )
  }

  public coalitionCells(vectorOne: Vector, vectorTwo: Vector): FieldRecord {
    const field = this.setCell(
      vectorTwo,
      this.getCell(vectorTwo)
        .set('id', this.getCell(vectorOne).id)
        .update('value', (value) => ++value))
    return field.setCell(
      vectorOne,
      CellRecord.init({ value: 0 }),
    )
  }

  public hasCell(vector: Vector): boolean {
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
}
