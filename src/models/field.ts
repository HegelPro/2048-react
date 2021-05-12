import * as A from 'fp-ts/Array'
import * as Cell from './cell'
import * as O from 'fp-ts/Option'
import * as Vector from './vector'
import { flow, pipe } from 'fp-ts/function'
import selectRandomAvaibleCellPoint from '../engine/selectRandomAvaibleCellIndex'

export type Field = Array<Array<O.Option<Cell.Cell>>>

export const init = ({ columns, rows }: {columns: number, rows: number}): Field => {
  return pipe(
    A.range(1, columns),
    A.map(
      _ => pipe(
        A.range(1, rows),
        A.map(_ => O.none)
      )
    )
  )
}

export const createStart = 
  flow(
    init,
    selectRandomAvaibleCellPoint
  )

export const getCellsSumValue = (field: Field): number => {
  return reduce(
    0,
    (acc, cell) => pipe(
      cell,
      O.map(cell => acc + cell.value),
      O.getOrElse(() => acc)
    )
  )(field)
}

export const setCell = ([positionX, positionY]: Vector.Vector, cell: O.Option<Cell.Cell>) => (field: Field): Field => {
  return mapWithPosition(
    ([x, y], cellOne) => {
      return positionX === x && positionY === y
        ? cell
        : cellOne
    },
    field
  )
}

export const getCell = ([x, y]: Vector.Vector) => (field: Field): O.Option<Cell.Cell> => {
  return pipe(
    field[y],
    O.fromNullable,
    O.map(row => row[x]),
    O.chain(O.fromNullable),
    O.flatten
  )
}

export const coalitionCellsInRow = (oneX: number, twoX: number) => (row: O.Option<Cell.Cell>[]): O.Option<Cell.Cell>[] => {
  return pipe(
    row[oneX],
    O.fromNullable,
    O.flatten,
    O.chain(oneCell =>
      pipe(
        row[twoX],
        O.fromNullable,
        O.flatten,
        O.chain(twoCell =>
          pipe(
            row,
            A.updateAt<O.Option<Cell.Cell>>(twoX, O.some(Cell.sumCell.concat(oneCell, twoCell))),
            O.chain(A.updateAt<O.Option<Cell.Cell>>(oneX, O.none)),
          )
        ),
      )
    ),
    O.getOrElse(() => row)
  )
}

// TODO - need refactor
export const swapeCells = (onePosition: Vector.Vector, twoPosition: Vector.Vector) => (field: Field): Field => {
  const saveCellOne = getCell(onePosition)(field)
  const saveCellTwo = getCell(twoPosition)(field)

  return pipe(
    field,
    setCell(
      onePosition,
      saveCellTwo,
    ),
    setCell(
      twoPosition,
      saveCellOne,
    )
  )
}

// TODO - need refactor
export const coalitionCells = (onePosition: Vector.Vector, twoPosition: Vector.Vector) => (field: Field): Field => {
  return pipe(
    getCell(onePosition)(field),
    O.chain(oneCell =>
      pipe(
        getCell(twoPosition)(field),
        O.map(twoCell => ({
          oneCell,
          twoCell
        }))
      )
    ),
    O.map(({
      oneCell,
      twoCell,
    }) =>
      pipe(
        field,
        setCell(
          onePosition,
          O.none
        ),
        setCell(
          twoPosition,
          O.some(Cell.sumCell.concat(oneCell, twoCell))
        )
      )
    ),
    O.getOrElse(() => field)
  )
}

export const eqField = A.getEq(A.getEq(O.getEq(Cell.eqCell)))

export const reduce = <T>(start: T, f: (acc: T, cell: O.Option<Cell.Cell>) => T) => (field: Field): T => {
  return pipe(
    field,
    A.reduce(
      start,
      (accRow, row)=>
        pipe(
          row,
          A.reduce(
            accRow,
            (accCell, cell) => f(accCell, cell)
          )
        )
    )
  )
}

export const reduceWithPosition = <T>(start: T, f: (acc: T, cell: O.Option<Cell.Cell>, vector: Vector.Vector) => T) => (field: Field): T => {
  return pipe(
    field,
    A.reduceWithIndex(
      start,
      (y, accRow, row)=>
        pipe(
          row,
          A.reduceWithIndex(
            accRow,
            (x, accCell, cell) => f(accCell, cell, [x, y])
          )
        )
    )
  )
}

export const mapWithPosition = <T>(f: (position: Vector.Vector, cell: O.Option<Cell.Cell>) => T, field: Field): T[][] => {
  return pipe(
    field,
    A.mapWithIndex(
      (y, row) => pipe(
        row,
        A.mapWithIndex(
          (x, cell) => f([x, y], cell)
        )
      )
    )
  )
}
