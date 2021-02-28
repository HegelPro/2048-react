import { FieldRecord } from '../../models/field/schema'
import { createAction } from 'typesafe-actions'

export const initFieldAction = createAction('field/INIT_FIELD')()

export const setCurrentFieldAction = createAction('field/SET_CURRENT_FIELD')<FieldRecord>()

export const setPreviousFieldAction = createAction('field/SET_PREVIOUS_FIELD')<FieldRecord>()
