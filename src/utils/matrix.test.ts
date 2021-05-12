import {getFromIterateInDiraction, getIterateInDiraction} from './matrix'
import { Diraction } from '../models/vector/constants'

const mockFieldOne = [
    [0, 1],
    [2, 3],
    [4, 5],
]

const kek: Array<{
    iterDirection: [Diraction, Diraction],
    result: number[][]
}> = [
    {
        iterDirection: ['DOWN', 'RIGHT'],
        result: [
            [0, 1],
            [2, 3],
            [4, 5],
          ]
    },
    {
        iterDirection: ['DOWN', 'LEFT'],
        result: [
            [1, 0],
            [3, 2],
            [5, 4],
          ]
    },
    {
        iterDirection: ['UP', 'RIGHT'],
        result: [
            [4, 5],
            [2, 3],
            [0, 1],
          ]
    },
    {
        iterDirection: ['UP', 'LEFT'],
        result: [
            [5, 4],
            [3, 2],
            [1, 0],
          ]
    },
    {
        iterDirection: ['RIGHT', 'DOWN'],
        result: [
            [0, 2, 4],
            [1, 3, 5]
          ]
    },
    {
        iterDirection: ['RIGHT', 'UP'],
        result: [
            [4, 2, 0],
            [5, 3, 1]
          ]
    },
    {
        iterDirection: ['LEFT', 'DOWN'],
        result: [
            [1, 3, 5],
            [0, 2, 4],
          ]
    },
    {
        iterDirection: ['LEFT', 'UP'],
        result: [
            [5, 3, 1],
            [4, 2, 0],
          ]
    },
]

describe('Matrix', () => {
    test('getIterateInDiraction()', () => {
        kek.forEach(({iterDirection: [first, second], result}) =>  expect(getIterateInDiraction(mockFieldOne, first, second)).toEqual(result))
    })

    test('getFromIterateInDiraction()', () => {
        kek.forEach(({iterDirection: [first, second], result}) =>  expect(getFromIterateInDiraction(result, first, second)).toEqual(mockFieldOne))
    })
})
