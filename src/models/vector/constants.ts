import { Vector, VectorHelpers } from '.'

type Diractions = 'RIGHT' | 'LEFT' | 'UP' | 'DOWN' | 'NULL'

export const DIRACTIONS: Record<Diractions, Vector> = {
  RIGHT: { x: 1, y: 0 },
  LEFT: { x: -1, y: 0 },
  UP: { x: 0, y: 1 },
  DOWN: { x: 0, y: -1 },
  NULL: VectorHelpers.zero,
}
