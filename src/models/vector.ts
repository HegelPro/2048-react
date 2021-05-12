import * as Eq from 'fp-ts/Eq'
import * as M from 'fp-ts/Monoid'
import * as N from 'fp-ts/lib/number'
import * as t from 'io-ts'

export type Vector = [number, number]

export const VectorSchema = t.tuple([t.number, t.number])

export const sumVector = M.tuple<Vector>(N.MonoidSum, N.MonoidSum)

export const eqVector = Eq.getTupleEq(N.Eq, N.Eq)
