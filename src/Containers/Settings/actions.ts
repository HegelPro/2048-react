import { createAction } from 'typesafe-actions'

import { IFieldSettings } from '../../models/settings/types'

export const setFieldSettingsAction = createAction('field/SET_FIELD_SETTINGS')<IFieldSettings>()
