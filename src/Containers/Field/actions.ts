import { createStandardAction } from 'typesafe-actions'
import { Vector } from '../../models/vector'
import { FieldRecord } from '../../models/field'

export const initField = createStandardAction('field/INIT_FIELD')()

export const initFieldFromLocalStorageAction = createStandardAction(
  'field/INIT_FIELD_FROM_LOCAL_STORAGE',
)()

export const setCurrentField = createStandardAction('field/SET_CURRENT_FIELD')<FieldRecord>()

export const setPreviousField = createStandardAction('field/SET_PREVIOUS_FIELD')<FieldRecord>()

export const moveCells = createStandardAction('field/MOVE_CELLS_REQUEST')<Vector>()

export const returnPrevField = createStandardAction('field/RETURN_PREVIOUS_FIELD')()
