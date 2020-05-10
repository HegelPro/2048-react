import { of } from 'rxjs'
import { filter, switchMap } from 'rxjs/operators'

import { Epic } from '../../../store/types'
import actions from '../../../store/actions'
import { isActionOf } from 'typesafe-actions'
import { FieldRecord } from '../../../models/field'
import selectRandomAvaibleCellPoint from '../../../engine/selectRandomAvaibleCellIndex'

export const initFieldEpic: Epic = (action$, state$) =>
  action$
    .pipe(
      filter(isActionOf(actions.field.initFieldAction)),
      switchMap(() => {
        const {
          columns,
          rows,
        } = state$.value.settings
        let field = FieldRecord.init({columns, rows})
        field = selectRandomAvaibleCellPoint(field)
        return of(
          actions.field.setCurrentFieldAction(field),
          actions.field.setPreviousFieldAction(field),
        )
      }),
    )
