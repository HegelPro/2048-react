import { of } from 'rxjs'
import { filter, debounceTime, switchMap } from 'rxjs/operators'
import { Epic } from '../../store/types'
import actions from '../../store/actions'
import { isActionOf } from 'typesafe-actions'
import { doNextGameStep } from '../../engine'
import { FieldRecord } from '../../models/field'
import selectRandomAvaibleCellPoint from '../../engine/selectRandomAvaibleCellIndex'

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

export const initFieldEpic: Epic = (action$) =>
  action$
    .pipe(
      filter(isActionOf(actions.field.initField)),
      switchMap(({payload}) => {
        let field = FieldRecord.init({
          columns: payload.columns,
          rows: payload.rows,
        })
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
