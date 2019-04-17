import * as FieldActions from '../Containers/Field/actions'
import { createStandardAction } from 'typesafe-actions'


export default {
  field: FieldActions,
  null: createStandardAction('NULL')()
}
