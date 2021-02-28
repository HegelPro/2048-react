import { FieldSettingsRecord } from '../../models/settings/schema'
import { createAction } from 'typesafe-actions'

export const setFieldSettingsAction = createAction('field/SET_FIELD_SETTINGS')<FieldSettingsRecord>()
