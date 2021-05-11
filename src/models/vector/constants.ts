import { Vector } from './schema'
import VectorHelpers from './helpers'

export type Diraction = 'RIGHT' | 'LEFT' | 'UP' | 'DOWN'

export const DIRACTIONS: Record<Diraction, Vector> = {
  RIGHT: { x: 1, y: 0 },
  LEFT: { x: -1, y: 0 },
  UP: { x: 0, y: 1 },
  DOWN: { x: 0, y: -1 },
}

export const diractionToVector = (dir: Diraction): Vector => DIRACTIONS[dir]
export const vectorToDiraction = (vec: Vector): Diraction => {
  if(VectorHelpers.equals(DIRACTIONS.DOWN, vec)) return 'DOWN'
  if(VectorHelpers.equals(DIRACTIONS.UP, vec)) return 'UP'
  if(VectorHelpers.equals(DIRACTIONS.RIGHT, vec)) return 'RIGHT'
  if(VectorHelpers.equals(DIRACTIONS.LEFT, vec)) return 'LEFT'

  throw new Error(`Wrong directionVector ${vec}`)
}