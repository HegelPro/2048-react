import { Vector } from '../../models/vector/schema'
import curry from '../../utils/curry'

const moveWhileCan = curry((
    canMove: (Vector: Vector) => Boolean,
    move: (vector: Vector) => Vector,
    iterPoint: Vector,
): Vector => {
    const newIterPoint = move(iterPoint)
    return canMove(newIterPoint)
        ? moveWhileCan(canMove, move, newIterPoint)
        : iterPoint
})

export default moveWhileCan
