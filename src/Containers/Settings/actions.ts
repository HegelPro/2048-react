import { createAction } from 'typesafe-actions'

import { FieldSettingsRecord } from '../../models/settings/schema'

export const setFieldSettingsAction = createAction('field/SET_FIELD_SETTINGS')<FieldSettingsRecord>()
