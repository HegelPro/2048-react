import { of } from 'rxjs'
import { isActionOf } from 'typesafe-actions'
import { filter, switchMap } from 'rxjs/operators'

import { Epic } from '../../store/types'
import actions from '../../store/actions'

export const moveFieldEpic: Epic = (action$) =>
  action$
    .pipe(
      filter(isActionOf(actions.settings.setFieldSettingsAction)),
      switchMap(({ payload }) => {
        localStorage.clear()
        return of(
          actions.settings.setFieldRowsAction(payload.rows),
          actions.settings.setFieldColumnsAction(payload.columns),
        )
      }),
    )
