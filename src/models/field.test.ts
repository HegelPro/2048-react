import * as A from 'fp-ts/Array'
import * as Cell from './cell'
import * as Field from './field'
import * as O from 'fp-ts/Option'
import * as Vector from './vector'
import { flow, pipe } from 'fp-ts/lib/function'

type TestFieldRecordFormat = string[]

export const formatFieldToTestField = (field: Field.Field): TestFieldRecordFormat =>
  pipe(
    field,
    A.map(
      flow(
        A.map(
          flow(
            O.map(({value}) => value),
            O.getOrElse(() => 0)
          )
        ),
      )
    ),
    A.map(c => c.join(''))
  )
  

export const formatTestFieldToField = (array: TestFieldRecordFormat): Field.Field =>
  pipe(
    array,
    A.map(row => row.split('')),
    A.map(flow(
      A.map(Number),
      A.map(num => num !== 0 ? O.some(Cell.init(num)) : O.none)
    ))
  )


describe('FieldHelpers', () => {
  const mockFieldOne = Field.init({columns: 1, rows: 1})

  test('init()', () => {
    const zeroMatrix11 = formatFieldToTestField(Field.init({rows: 1, columns: 1}))
    const zeroMatrix21 = formatFieldToTestField(Field.init({rows: 1, columns: 2}))
    const zeroMatrix12 = formatFieldToTestField(Field.init({rows: 2, columns: 1}))
    const zeroMatrix33 = formatFieldToTestField(Field.init({rows: 3, columns: 3}))
    expect(zeroMatrix11).toEqual(['0'])
    expect(zeroMatrix21).toEqual([
      '0',
      '0',
    ])
    expect(zeroMatrix12).toEqual([
      '00',
    ])
    expect(zeroMatrix33).toEqual([
      '000',
      '000',
      '000',
    ])

    expect(Field.init({rows: 3, columns: 3}).every(row => row.every(O.isNone))).toBeTruthy()
  })

  test('setCell()', () => {
    const mockLocalFieldRecordOne = Field.setCell([0, 0], O.some(Cell.init(1)))(mockFieldOne)
    expect(O.toUndefined(O.map(({value}: Cell.Cell) => value)(mockLocalFieldRecordOne[0][0]))).toEqual(1)
    expect(mockLocalFieldRecordOne[0].length).toEqual(1)
    expect(mockLocalFieldRecordOne.length).toEqual(1)
    expect(mockLocalFieldRecordOne).not.toBe(mockFieldOne)

    const mockLocalFieldRecordTwo = Field.setCell([1, 1], O.some(Cell.init(1)))(mockFieldOne)
    expect(O.toUndefined(O.map(({value}: Cell.Cell) => value)(mockLocalFieldRecordTwo[0][0]))).toEqual(undefined)
    expect(mockLocalFieldRecordTwo[0].length).toEqual(1)
    expect(mockLocalFieldRecordTwo.length).toEqual(1)
  })

  test('swapCells()', () => {
    const mockFieldOne = formatTestFieldToField(['00'])
    const mockFieldTwo = formatTestFieldToField(['01'])
    const mockFieldThree = formatTestFieldToField(['10'])
    const mockFieldFour = formatTestFieldToField(['11'])

    const vectorOne: Vector.Vector = [0, 0]
    const vectorTwo: Vector.Vector = [1, 0]
    const vectorThreeOut: Vector.Vector = [0, 1]

    expect(formatFieldToTestField(Field.swapeCells(vectorOne, vectorTwo)(mockFieldOne))).toEqual(['00'])
    expect(formatFieldToTestField(Field.swapeCells(vectorOne, vectorTwo)(mockFieldTwo))).toEqual(['10'])
    expect(formatFieldToTestField(Field.swapeCells(vectorOne, vectorTwo)(mockFieldThree))).toEqual(['01'])
    expect(formatFieldToTestField(Field.swapeCells(vectorOne, vectorTwo)(mockFieldFour))).toEqual(['11'])

    expect(formatFieldToTestField(Field.swapeCells(vectorOne, vectorThreeOut)(mockFieldTwo))).toEqual(['01'])
  })

  test('swapCells()', () => {
    const mockFieldOne = formatTestFieldToField(['00'])
    const mockFieldTwo = formatTestFieldToField(['01'])
    const mockFieldThree = formatTestFieldToField(['10'])
    const mockFieldFour = formatTestFieldToField(['11'])

    const vectorOne: Vector.Vector = [0, 0]
    const vectorTwo: Vector.Vector = [1, 0]
    const vectorThreeOut: Vector.Vector = [0, 1]

    expect(formatFieldToTestField(Field.coalitionCells(vectorOne, vectorTwo)(mockFieldOne))).toEqual(['00'])
    expect(formatFieldToTestField(Field.coalitionCells(vectorOne, vectorTwo)(mockFieldTwo))).toEqual(['01'])
    expect(formatFieldToTestField(Field.coalitionCells(vectorOne, vectorTwo)(mockFieldThree))).toEqual(['10'])
    expect(formatFieldToTestField(Field.coalitionCells(vectorOne, vectorTwo)(mockFieldFour))).toEqual(['02'])

    expect(formatFieldToTestField(Field.swapeCells(vectorOne, vectorThreeOut)(mockFieldTwo))).toEqual(['01'])
  })
})