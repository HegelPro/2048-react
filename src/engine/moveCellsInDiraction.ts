import * as Field from '../models/field'
import * as O from 'fp-ts/lib/Option'
import { Diraction } from '../models/diraction'
import doNextGameStep from './doNextGameStep'
import selectRandomAvaibleCellPoint from './selectRandomAvaibleCellIndex'

export const moveCellsInDiraction = ([diractionOne, diractionTwo]: [Diraction, Diraction]) => (field: Field.Field): O.Option<Field.Field> => {
    const movedField = doNextGameStep(diractionOne, diractionTwo)(field)

    if (!Field.eqField.equals(field, movedField)) {
        return O.some(selectRandomAvaibleCellPoint(movedField))
    }

    return O.none
}