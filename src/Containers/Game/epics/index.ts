import { of, empty } from 'rxjs'
import { filter, debounceTime, switchMap } from 'rxjs/operators'

import { Epic } from '../../../store/types'
import actions from '../../../store/actions'
import { isActionOf } from 'typesafe-actions'
import { doNextGameStep } from '../../../engine'
import selectRandomAvaibleCellPoint from '../../../engine/selectRandomAvaibleCellIndex'

export * from './keyboardEpics'

export * from './initEpics'
// TODO после удаления immutable восcтановить
// export * from './mouseEpics'

export const moveFieldEpic: Epic = (action$, state$) =>
  action$
    .pipe(
      filter(isActionOf(actions.field.moveCellsAction)),
      debounceTime(100),
      switchMap(({payload}) => {
        const savedField = state$.value.field.current
        let changedField = doNextGameStep(savedField, payload)
        if (!changedField.cells.equals(savedField.cells)) {
          changedField = selectRandomAvaibleCellPoint(changedField)
          return of(
            actions.field.setCurrentFieldAction(changedField),
            actions.field.setPreviousFieldAction(savedField),
          )
        }
        return empty()
      }),
    )

export const returnPrevFieldEpic: Epic = (action$, state$) =>
  action$
    .pipe(
      filter(isActionOf(actions.field.returnPrevFieldAction)),
      switchMap(() => {
        const fieldState = state$.value.field
        const prevField = fieldState.previous
        return of(actions.field.setCurrentFieldAction(prevField))
      }),
    )
