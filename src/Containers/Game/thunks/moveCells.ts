import { Thunk } from '../../../store/types'
import doNextGameStep from '../../../engine/doNextGameStep'
import selectRandomAvaibleCellPoint from '../../../engine/selectRandomAvaibleCellIndex'
import FieldStateRecordHelper from '../../../models/state/helpers'
import { setFieldRecordsAction } from '../../State/actions'
import { setCurrentFieldAction, setPreviousFieldAction } from '../actions'
import { Vector } from '../../../models/vector/schema'
import FieldHelpers from '../../../models/field/helpers'

function moveCellsThunk(diraction: Vector): Thunk<void> {
  return function(dispatch, getState) {
    const savedField = getState().field.current
    const movedField = doNextGameStep(diraction, savedField)
    
    if (!FieldHelpers.equals(savedField, movedField)) {
      const changedField = selectRandomAvaibleCellPoint(movedField)
      const newStateRecord = FieldStateRecordHelper.updateRecordValue(getState().state, changedField)

      dispatch(setCurrentFieldAction(changedField))
      dispatch(setPreviousFieldAction(savedField))
      dispatch(setFieldRecordsAction(newStateRecord))
    }
  }
}

export default moveCellsThunk
  
