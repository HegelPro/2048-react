import { Vector } from './schema'
import curry from '../../utils/curry'

const image = ({x, y}: Vector): Vector => ({x: y, y: x})

const opposed = ({x, y}: Vector): Vector => ({x: -x, y: -y})

const turn = curry((A: number, diractionRatio = 1, {x, y}: Vector) =>
  ({
    x: x * +Math.cos(A).toFixed(10) + y * +Math.sin(A).toFixed(10) * diractionRatio,
    y: x * +Math.sin(A).toFixed(10) * (-diractionRatio) + y * +Math.cos(A).toFixed(10),
  })
)

const plus = curry((vector: Vector, {x, y}): Vector =>
  ({ x: x + vector.x, y: y + vector.y })
)

const minus = curry((vector: Vector, {x, y}: Vector): Vector =>
  ({ x: x - vector.x, y: y - vector.y })
)

const equals = curry((vector: Vector, {x, y}: Vector): boolean =>
  x === vector.x
  && y === vector.y
)

const zero: Vector = {x: 0, y: 0}

const normolize = (vector: Vector): Vector =>
  vector.x > vector.y
    ? vector
    : image(vector)


const VectorHelpers = {
  image,
  opposed,
  turn,
  plus,
  minus,
  equals,
  normolize,
  zero,
}

export default VectorHelpers
