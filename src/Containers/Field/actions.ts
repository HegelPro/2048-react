import { createStandardAction } from 'typesafe-actions'
import { Vector } from '../../models/vector'
import { FieldRecord } from '../../models/field'

export const initFieldAction = createStandardAction('field/INIT_FIELD')()

export const initFieldFromLocalStorageAction = createStandardAction(
  'field/INIT_FIELD_FROM_LOCAL_STORAGE',
)()

export const setCurrentFieldAction = createStandardAction('field/SET_CURRENT_FIELD')<FieldRecord>()

export const setPreviousFieldAction = createStandardAction('field/SET_PREVIOUS_FIELD')<FieldRecord>()

export const moveCellsAction = createStandardAction('field/MOVE_CELLS')<Vector>()

export const returnPrevFieldAction = createStandardAction('field/RETURN_PREVIOUS_FIELD')()
