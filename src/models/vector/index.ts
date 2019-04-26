import { Record } from 'immutable'

interface IVectorType {
  x?: number,
  y?: number,
}

export class Vector extends Record< Required<IVectorType> >({
  x: 0,
  y: 0,
}) {
  public image(): Vector {
    return new Vector({
      x: this.y,
      y: this.x,
    })
  }

  public opposed(): Vector {
    return new Vector({
      x: -this.x,
      y: -this.y,
    })
  }

  public plus(vector: Vector): Vector {
    return new Vector({
      x: this.x + vector.x,
      y: this.y + vector.y,
    })
  }

  public turn(A: number, diractionRatio = 1): Vector {
    return new Vector({
      x: this.x * +Math.cos(A).toFixed(10) + this.y * +Math.sin(A).toFixed(10) * diractionRatio,
      y: this.x * +Math.sin(A).toFixed(10) * (-diractionRatio) + this.y * +Math.cos(A).toFixed(10),
    })
  }

  public minus(vector: Vector): Vector {
    return new Vector({
      x: this.x - vector.x,
      y: this.y - vector.y,
    })
  }
}
