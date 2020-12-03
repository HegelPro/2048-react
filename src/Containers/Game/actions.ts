import { createAction } from 'typesafe-actions'
import { FieldRecord } from '../../models/field'

export const initFieldAction = createAction('field/INIT_FIELD')()

export const setCurrentFieldAction = createAction('field/SET_CURRENT_FIELD')<FieldRecord>()

export const setPreviousFieldAction = createAction('field/SET_PREVIOUS_FIELD')<FieldRecord>()
