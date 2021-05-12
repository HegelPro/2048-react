import { Diraction } from '../models/diraction'

export const copyMatrix = <T>(matrix: T[][]) => [...matrix].map(e => [...e])
export const transposeMatrix = <T>(matrix: T[][]) => matrix[0].map((_, x) => matrix.map((_, y) => matrix[y][x]))

export const getIterateInDiraction = (
    firstDir: Diraction,
    secondDir: Diraction
) => <T>(matrix: T[][]): T[][] => {

    const copiedMatrix = copyMatrix(matrix)

    if (firstDir === 'DOWN' || firstDir === 'UP') {
        if (firstDir === 'DOWN' && secondDir === 'RIGHT') return copiedMatrix 
        if (firstDir === 'DOWN' && secondDir === 'LEFT') return copiedMatrix.map(row => row.reverse())
        if (firstDir === 'UP' && secondDir === 'RIGHT') return copiedMatrix.reverse()
        if (firstDir === 'UP' && secondDir === 'LEFT') return copiedMatrix.reverse().map(row => row.reverse())
    }

    if (firstDir === 'RIGHT' || firstDir === 'LEFT') {
        const trastoneMatrix = copiedMatrix[0].map((_, x) => copiedMatrix.map((_, y) => copiedMatrix[y][x]))
    
        if (firstDir === 'RIGHT' && secondDir === 'DOWN') return trastoneMatrix
        if (firstDir === 'RIGHT' && secondDir === 'UP') return trastoneMatrix.map(row => row.reverse())
        if (firstDir === 'LEFT' && secondDir === 'DOWN') return trastoneMatrix.reverse()
        if (firstDir === 'LEFT' && secondDir === 'UP') return trastoneMatrix.reverse().map(row =>  row.reverse())
    }
  
    throw new Error('derections must be perpendicular')
}

export const getFromIterateInDiraction = (
    firstDir: Diraction,
    secondDir: Diraction,
  ) => <T>(matrix: T[][]): T[][] => {
    
    const copiedMatrix = copyMatrix(matrix)

    if (firstDir === 'DOWN' || firstDir === 'UP') {
        if (firstDir === 'DOWN' && secondDir === 'RIGHT') return copiedMatrix 
        if (firstDir === 'DOWN' && secondDir === 'LEFT') return copiedMatrix.map(row => row.reverse())
        if (firstDir === 'UP' && secondDir === 'RIGHT') return copiedMatrix.reverse()
        if (firstDir === 'UP' && secondDir === 'LEFT') return copiedMatrix.reverse().map(row => row.reverse())
    }

    if (firstDir === 'RIGHT' || firstDir === 'LEFT') {
        const transposedMatrix = transposeMatrix(copiedMatrix)
    
        if (firstDir === 'RIGHT' && secondDir === 'DOWN') return transposedMatrix
        if (firstDir === 'RIGHT' && secondDir === 'UP') return transposedMatrix.reverse()
        if (firstDir === 'LEFT' && secondDir === 'DOWN') return transposedMatrix.map(row => row.reverse())
        if (firstDir === 'LEFT' && secondDir === 'UP') return transposedMatrix.reverse().map(row =>  row.reverse())
    }
  
    throw new Error('derections must be perpendicular')
}