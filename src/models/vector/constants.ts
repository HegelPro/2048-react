import { Vector } from '.'

export const DIRACTIONS = {
  RIGHT: new Vector({ x: 1, y: 0 }),
  LEFT: new Vector({ x: -1, y: 0 }),
  UP: new Vector({ x: 0, y: 1 }),
  DOWN: new Vector({ x: 0, y: -1 }),
  NULL: new Vector(),
}
