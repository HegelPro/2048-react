import * as E from 'fp-ts/Eq'
import * as M from 'fp-ts/Monoid'
import * as N from 'fp-ts/number'
import * as t from 'io-ts'

export type Cell = t.TypeOf<typeof CellSchema>

export const CellSchema = t.strict({
  value: t.number,
  id: t.number,
})

export const setValue = (cell: Cell, value: number): Cell => ({...cell, value})

export const eqCell = E.contramap((cell: Cell) => cell.value)(N.Eq)

export const init = (value: number): Cell => ({
  value,
  id: Math.random(),
})

export const sumCell: M.Monoid<Cell> = {
  concat: (cellOne, cellTwo) => ({
    id: cellOne.id,
    value: cellOne.value + cellTwo.value
  }),
  empty: {id: 0, value: 0}
}  
