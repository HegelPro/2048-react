import { from, of } from 'rxjs'
import { filter, debounceTime, switchMap } from 'rxjs/operators'
import { RootActions, Epic } from '../../store/types'
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
        }
        return of(actions.field.setField(changedField))
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
        return of(actions.field.setField(field))
      })
    )

