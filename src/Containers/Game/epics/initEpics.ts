import { of } from 'rxjs'
import { filter, switchMap } from 'rxjs/operators'
import { Epic } from '../../../store/types'
import actions from '../../../store/actions'
import { isActionOf } from 'typesafe-actions'
import { FieldRecord } from '../../../models/field'
import selectRandomAvaibleCellPoint from '../../../engine/selectRandomAvaibleCellIndex'
import { loadState } from '../utils'

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

export const initFieldFromLocalStorageEpic: Epic = (action$) =>
  action$
    .pipe(
      filter(isActionOf(actions.field.initFieldFromLocalStorageAction)),
      switchMap(() => {
        const stateFromLocalStorage = loadState()
        return stateFromLocalStorage
          ? of(
              actions.field.setCurrentFieldAction(stateFromLocalStorage.field.current),
              actions.field.setPreviousFieldAction(stateFromLocalStorage.field.previous),
              actions.settings.setFieldSettingsAction({
                rows: stateFromLocalStorage.settings.rows,
                columns: stateFromLocalStorage.settings.columns,
              }),
              actions.state.setFieldRecordsAction(stateFromLocalStorage.state.records),
            )
          : of(actions.field.initFieldAction())
      }),
    )
