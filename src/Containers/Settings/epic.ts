import { of } from 'rxjs'
import { filter, switchMap } from 'rxjs/operators'
import { Epic } from '../../store/types'
import { isActionOf } from 'typesafe-actions'
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
          actions.field.initField(),
        )
      }),
    )
