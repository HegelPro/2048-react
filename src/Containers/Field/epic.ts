import { of } from 'rxjs'
import { filter, debounceTime, switchMap } from 'rxjs/operators'
import { Epic } from '../../store/types'
import actions from '../../store/actions'
import { isActionOf } from 'typesafe-actions'
import { doNextGameStep } from '../../engine'
import { FieldRecord } from '../../models/field'
import selectRandomAvaibleCellPoint from '../../engine/selectRandomAvaibleCellIndex'
import { loadState } from './utils'

export const moveFieldEpic: Epic = (action$, state$) =>
  action$
    .pipe(
      filter(isActionOf(actions.field.moveCells)),
      debounceTime(100),
      switchMap(({payload}) => {
        const savedField = state$.value.field.current
        let changedField = doNextGameStep(savedField, payload)
        if (!changedField.cells.equals(savedField.cells)) {
          changedField = selectRandomAvaibleCellPoint(changedField)
          return of(
            actions.field.setCurrentField(changedField),
            actions.field.setPreviousField(savedField),
          )
        }
        return of(actions.null())
      }),
    )

export const initFieldEpic: Epic = (action$, state$) =>
  action$
    .pipe(
      filter(isActionOf(actions.field.initField)),
      switchMap(() => {
        const {
          columns,
          rows,
        } = state$.value.settings
        let field = FieldRecord.init({columns, rows})
        field = selectRandomAvaibleCellPoint(field)
        return of(
          actions.field.setCurrentField(field),
          actions.field.setPreviousField(field),
        )
      }),
    )

export const returnPrevFieldEpic: Epic = (action$, state$) =>
  action$
    .pipe(
      filter(isActionOf(actions.field.returnPrevField)),
      switchMap(() => {
        const fieldState = state$.value.field
        const prevField = fieldState.previous
        return of(actions.field.setCurrentField(prevField))
      }),
    )

export const initFieldFromLocalStorageEpic: Epic = (action$, state$) =>
  action$
    .pipe(
      filter(isActionOf(actions.field.initFieldFromLocalStorageAction)),
      switchMap(() => {
        const stateFromLocalStorage = loadState()
        return stateFromLocalStorage
          ? of(
              actions.field.setCurrentField(stateFromLocalStorage.field.current),
              actions.field.setPreviousField(stateFromLocalStorage.field.previous),
              actions.settings.setFieldSettingsAction({
                rows: stateFromLocalStorage.settings.rows,
                columns: stateFromLocalStorage.settings.columns,
              }),
            )
          : of(actions.field.initField())
      }),
    )
