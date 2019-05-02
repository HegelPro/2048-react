import { Record } from 'immutable'

interface IVectorType {
  x?: number,
  y?: number,
}

export class VectorRecord extends Record< Required<IVectorType> >({
  x: 0,
  y: 0,
}) {
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
