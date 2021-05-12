import { getFromIterateInDiraction, getIterateInDiraction } from '../utils/matrix'
import { Diraction } from '../models/vector/constants'
import { FieldRecord } from '../models/field/schema'
import { Nothing } from 'purify-ts'

const cellsMover = (
    field: FieldRecord,
    firstDir: Diraction,
    secondDir: Diraction,
): FieldRecord => {
    return getFromIterateInDiraction(getIterateInDiraction(field, firstDir, secondDir)
        .map(row => {
            const lol = row.filter(cell => cell.isJust()).reverse()
            return [...row.map((_, i) => lol[i] ? lol[i] : Nothing)].reverse()
        }), firstDir, secondDir)
}

export default cellsMover