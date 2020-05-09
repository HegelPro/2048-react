export interface Vector {
  readonly x: number,
  readonly y: number,
}

const imageVector = ({x, y}: Vector): Vector =>
  ({x: y, y: x})


const opposedVector = ({x, y}: Vector): Vector =>
  ({x: -x, y: -y})

const turnVector = (A: number, diractionRatio = 1) =>
  ({x, y}: Vector): Vector =>
    ({
      x: x * +Math.cos(A).toFixed(10) + y * +Math.sin(A).toFixed(10) * diractionRatio,
      y: x * +Math.sin(A).toFixed(10) * (-diractionRatio) + y * +Math.cos(A).toFixed(10),
    })

const plusVectors = (vector: Vector) =>
  ({x, y}: Vector): Vector =>
    ({ x: x + vector.x, y: y + vector.y })

const minusVectors = (vector: Vector) =>
  ({x, y}: Vector): Vector =>
    ({ x: x - vector.x, y: y - vector.y })

const equalsVectors = (vector: Vector) =>
  ({x, y}: Vector): boolean =>
    x === vector.x
    && y === vector.y
    

const zeroVector: Vector = {x: 0, y: 0}

const normolizeVector = (vector: Vector): Vector =>
  vector.x > vector.y
    ? vector
    : imageVector(vector)


export const VectorHelpers = {
  image: imageVector,
  opposed: opposedVector,
  turn: turnVector,
  plus: plusVectors,
  minus: minusVectors,
  equals: equalsVectors,
  normolize: normolizeVector,
  zero: zeroVector,
}
