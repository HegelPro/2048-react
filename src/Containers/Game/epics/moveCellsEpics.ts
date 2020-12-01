import { of, empty } from 'rxjs'
import { filter, debounceTime, switchMap } from 'rxjs/operators'
import { Epic } from '../../../store/types'
import { isActionOf } from 'typesafe-actions'
import doNextGameStep from '../../../engine/doNextGameStep'
import selectRandomAvaibleCellPoint from '../../../engine/selectRandomAvaibleCellIndex'
import { FieldStateRecordHelper } from '../../../models/state'
import { setFieldRecordsAction } from '../../State/actions'
import { moveCellsAction, setCurrentFieldAction, setPreviousFieldAction } from '../actions'

export const moveFieldEpic: Epic = (action$, state$) =>
  action$
    .pipe(
      filter(isActionOf(moveCellsAction)),
      debounceTime(100),
      switchMap(({payload}) => {
        const savedField = state$.value.field.current
        let changedField = doNextGameStep(payload)(savedField)

        // TODO поправить потом выкинута equal от IM.LIST
        if (changedField.cells !== savedField.cells) {
          changedField = selectRandomAvaibleCellPoint(changedField)

          const newStateRecord = FieldStateRecordHelper.updateRecordValue(state$.value.state, changedField)

          return of(
            setCurrentFieldAction(changedField),
            setPreviousFieldAction(savedField),
            setFieldRecordsAction(newStateRecord),
          )
        }
        return empty()
      }),
    )

