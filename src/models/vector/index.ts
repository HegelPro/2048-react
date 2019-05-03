import { Record } from 'immutable'

import { isObject } from '../../utils/types'

import { IVector } from './types'

const defaultVector: IVector = { x: 0, y: 0 }

export class VectorRecord extends Record<IVector>(defaultVector) {
  public static deserialize(object: unknown): VectorRecord {
    if (!isObject(object)) {
      throw new TypeError('Wrong object type for a deserialization')
    }
    return new VectorRecord(object)
  }

  public image(): VectorRecord {
    return new VectorRecord({
      x: this.y,
      y: this.x,
    })
  }

  public opposed(): VectorRecord {
    return new VectorRecord({
      x: -this.x,
      y: -this.y,
    })
  }

  public plus(vector: VectorRecord): VectorRecord {
    return new VectorRecord({
      x: this.x + vector.x,
      y: this.y + vector.y,
    })
  }

  public turn(A: number, diractionRatio = 1): VectorRecord {
    return new VectorRecord({
      x: this.x * +Math.cos(A).toFixed(10) + this.y * +Math.sin(A).toFixed(10) * diractionRatio,
      y: this.x * +Math.sin(A).toFixed(10) * (-diractionRatio) + this.y * +Math.cos(A).toFixed(10),
    })
  }

  public minus(vector: VectorRecord): VectorRecord {
    return new VectorRecord({
      x: this.x - vector.x,
      y: this.y - vector.y,
    })
  }
}
