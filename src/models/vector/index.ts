import { Record } from 'immutable'

export interface VectorType {
  x?: number,
  y?: number,
}

export class Vector extends Record< Required<VectorType> >({
  x: 0,
  y: 0,
}) {
  image(): Vector {
    return new Vector({
      x: this.y,
      y: this.x,
    })
  }

  opposed(): Vector {
    return new Vector({
      x: -this.x,
      y: -this.y,
    })
  }

  plus(vector: Vector): Vector {
    return new Vector({
      x: this.x + vector.x,
      y: this.y + vector.y,
    })
  }

  turn(A: number, diractionRatio = 1): Vector {
    return new Vector({
      x: this.x * +Math.cos(A).toFixed(10) + this.y * +Math.sin(A).toFixed(10) * diractionRatio,
      y: this.x * +Math.sin(A).toFixed(10) * (-diractionRatio) + this.y * +Math.cos(A).toFixed(10)
    })
  }

  minus(vector: Vector): Vector {
    return new Vector({
      x: this.x - vector.x,
      y: this.y - vector.y,
    })
  }
}
