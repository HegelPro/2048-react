import { Vector } from './schema'

export type Diraction = 'RIGHT' | 'LEFT' | 'UP' | 'DOWN'

export const DIRACTIONS: Record<Diraction, Vector> = {
  RIGHT: { x: 1, y: 0 },
  LEFT: { x: -1, y: 0 },
  UP: { x: 0, y: 1 },
  DOWN: { x: 0, y: -1 },
}
