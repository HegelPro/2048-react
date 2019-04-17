import { of } from 'rxjs'
import { filter, debounceTime, switchMap } from 'rxjs/operators'
import { Epic } from '../../store/types'
import actions from '../../store/actions'
import { isActionOf } from 'typesafe-actions'
import { doNextGameStep } from '../../engine'
import { FieldRecord } from '../../models/field'
import selectRandomAvaibleCellPoint from '../../engine/selectRandomAvaibleCellIndex';


export const moveFieldEpic: Epic = (action$, state$) =>
  action$
    .pipe(
      filter(isActionOf(actions.field.moveCells)),
      debounceTime(100),
      switchMap(({payload}) => {
        const saveField = state$.value.field.current
        let changedField = doNextGameStep(saveField, payload)
        if(!changedField.cells.equals(saveField.cells)) {
          changedField = selectRandomAvaibleCellPoint(changedField)
          return of(
            actions.field.setField(changedField),
            actions.field.addFieldInHistory(saveField),
          )
        }
        return of(actions.null())
      })
    )

export const initFieldEpic: Epic = action$ =>
  action$
    .pipe(
      filter(isActionOf(actions.field.initField)),
      switchMap(({payload}) => {
        let field = FieldRecord.init({
          columns: payload.columns,
          rows:payload.rows,
        })
        field = selectRandomAvaibleCellPoint(field)
        return of(
          actions.field.setField(field),
          actions.field.resetFieldHistory()
        )
      })
    )

export const returnPrevFieldEpic: Epic = (action$, state$) =>
  action$
    .pipe(
      filter(isActionOf(actions.field.returnPrevField)),
      switchMap(() => {
        const fieldState = state$.value.field
        const prevField = fieldState.history.last(undefined) || fieldState.current
        return of(
          actions.field.setField(prevField),
          actions.field.remoteLostFieldInHistory(),
        )
      })
    )
