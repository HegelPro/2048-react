import * as Field from '../models/field'
import { Diraction } from '../models/diraction'
import doNextGameStep from './doNextGameStep'
import selectRandomAvaibleCellPoint from './selectRandomAvaibleCellIndex'

export const moveCellsInDiraction = ([diractionOne, diractionTwo]: [Diraction, Diraction]) => (field: Field.Field): Field.Field => {
    const movedField = doNextGameStep(diractionOne, diractionTwo)(field)

    if (!Field.eqField.equals(field, movedField)) {
        return selectRandomAvaibleCellPoint(movedField)
    }

    return field
}