import { VectorRecord } from '.'

export const DIRACTIONS = {
  RIGHT: new VectorRecord({ x: 1, y: 0 }),
  LEFT: new VectorRecord({ x: -1, y: 0 }),
  UP: new VectorRecord({ x: 0, y: 1 }),
  DOWN: new VectorRecord({ x: 0, y: -1 }),
  NULL: new VectorRecord({ x: 0, y: 0 }),
}
