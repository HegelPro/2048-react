import { List, Record } from 'immutable'

import { CellRecord } from '../cell'
import { Vector } from '../vector'

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

  getCellsSumValue() {
    return this.cells.reduce((result, cell) => cell.value !== 0
      ? result + cell.getValue()
      : result, 0)
  }

  getCellPosition(cell: CellRecord): Vector | undefined {
    const position = this.cells.findIndex((cellOne) => cellOne.id === cell.id)
    return position !== -1
      ? {
        x: position % this.columns,
        y: Math.floor((position / this.columns)),
      }
      : undefined
  }

  getCell(vector: Vector): CellRecord {
    const cell = this.cells.get(vector.x + vector.y * this.columns)
    if (!cell) {
      throw new Error('CellRecord isn\'t exist')
    }
    return cell
  }

  setCell(vector: Vector, cell: CellRecord): FieldRecord {
    return this
      .update(
        'cells',
        (cells) => cells
          .set(vector.x + vector.y * this.columns, cell
            .set('renderId', Math.random())))
  }

  swapeCells(vectorOne: Vector, vectorTwo: Vector): FieldRecord {
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

  coalitionCells(vectorOne: Vector, vectorTwo: Vector): FieldRecord {
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
}
