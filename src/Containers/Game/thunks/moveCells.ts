import { Thunk } from '../../../store/types'
import doNextGameStep from '../../../engine/doNextGameStep'
import selectRandomAvaibleCellPoint from '../../../engine/selectRandomAvaibleCellIndex'
import { FieldStateRecordHelper } from '../../../models/state'
import { setFieldRecordsAction } from '../../State/actions'
import { setCurrentFieldAction, setPreviousFieldAction } from '../actions'
import { Vector } from '../../../models/vector'

function moveCellsThunk(diraction: Vector): Thunk<void> {
  return function(dispatch, getState) {
    const savedField = getState().field.current
      let changedField = doNextGameStep(diraction)(savedField)

      // TODO поправить потом выкинута equal от IM.LIST
      if (changedField.cells !== savedField.cells) {
        changedField = selectRandomAvaibleCellPoint(changedField)

        const newStateRecord = FieldStateRecordHelper.updateRecordValue(getState().state, changedField)

        dispatch(setCurrentFieldAction(changedField))
        dispatch(setPreviousFieldAction(savedField))
        dispatch(setFieldRecordsAction(newStateRecord))
      }
  }
}

export default moveCellsThunk
  
