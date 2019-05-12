import { List, Record } from 'immutable'

import { CellRecord } from '../cell'
import { VectorRecord } from '../vector'

import { initCells } from './utils'
import {
  IField,
  IFieldInitParams,
} from './types'

const defaultField: IField = {
  rows: 0,
  columns: 0,
  cells: List(),
}

export class FieldRecord extends Record<IField>(defaultField) {
  public static init({ columns, rows }: IFieldInitParams): FieldRecord {
    return new FieldRecord({
      rows,
      columns,
      cells: initCells(columns, rows),
    })
  }

  public getCellsSumValue() {
    return this.cells.reduce((result, cell) => cell.value !== 0
      ? result + cell.getValue()
      : result, 0)
  }

  public getCellPosition(cell: CellRecord): VectorRecord | undefined {
    const position = this.cells.findIndex((cellOne) => cellOne.id === cell.id)
    return position !== -1
      ? new VectorRecord({
        x: position % this.columns,
        y: Math.floor((position / this.columns)),
      })
      : undefined
  }

  public getCell(vector: VectorRecord): CellRecord {
    const cell = this.cells.get(vector.x + vector.y * this.columns)
    if (!cell) {
      throw new Error('CellRecord isn\'t exist')
    }
    return cell
  }

  public setCell(vector: VectorRecord, cell: CellRecord): FieldRecord {
    return this
      .update(
        'cells',
        (cells) => cells.set(vector.x + vector.y * this.columns, cell))
  }

  public swapeCells(vectorOne: VectorRecord, vectorTwo: VectorRecord): FieldRecord {
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

  public coalitionCells(vectorOne: VectorRecord, vectorTwo: VectorRecord): FieldRecord {
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

  public hasCell(vector: VectorRecord): boolean {
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
