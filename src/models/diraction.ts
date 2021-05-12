import * as Vector from './vector'

export type Diraction = 'RIGHT' | 'LEFT' | 'UP' | 'DOWN'

export const DIRACTIONS: Record<Diraction, Vector.Vector> = {
  RIGHT: [1, 0],
  LEFT: [-1, 0],
  UP: [0, 1],
  DOWN: [0, -1],
}

export const diractionToVector = (dir: Diraction): Vector.Vector => DIRACTIONS[dir]
export const vectorToDiraction = (vec: Vector.Vector): Diraction => {
  if(Vector.eqVector.equals(DIRACTIONS.DOWN, vec)) return 'DOWN'
  if(Vector.eqVector.equals(DIRACTIONS.UP, vec)) return 'UP'
  if(Vector.eqVector.equals(DIRACTIONS.RIGHT, vec)) return 'RIGHT'
  if(Vector.eqVector.equals(DIRACTIONS.LEFT, vec)) return 'LEFT'

  throw new Error(`Wrong directionVector ${vec}`)
}