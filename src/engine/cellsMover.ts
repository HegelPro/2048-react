import * as A from 'fp-ts/Array'
import * as Field from '../models/field'
import * as O from 'fp-ts/Option'
import { getFromIterateInDiraction, getIterateInDiraction } from '../utils/matrix'
import { Diraction } from '../models/diraction'
import { pipe } from 'fp-ts/function'

const cellsMover = (
    firstDir: Diraction,
    secondDir: Diraction,
) => (field: Field.Field): Field.Field => {
    return pipe(
        field,
        getIterateInDiraction(firstDir, secondDir),
        A.map(row => {
            const lol = row.filter(cell => O.isSome(cell)).reverse()
            return [...row.map((_, i) => lol[i] ? lol[i] : O.none)].reverse()
        }),
        getFromIterateInDiraction(firstDir, secondDir)
    )
}

export default cellsMover