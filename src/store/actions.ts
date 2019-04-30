import * as FieldActions from '../Containers/Field/actions'
import * as FieldSettingActions from '../Containers/Settings/actions'
import { createStandardAction } from 'typesafe-actions'

export default {
  field: FieldActions,
  settings: FieldSettingActions,
  null: createStandardAction('NULL')(),
}
