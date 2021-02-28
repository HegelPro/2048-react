import { setCurrentFieldAction, setPreviousFieldAction } from '../actions'
import FieldHelpers from '../../../models/field/helpers'
import FieldStateRecordHelper from '../../../models/state/helpers'
import { Thunk } from '../../../store/types'
import { Vector } from '../../../models/vector/schema'
import doNextGameStep from '../../../engine/doNextGameStep'
import selectRandomAvaibleCellPoint from '../../../engine/selectRandomAvaibleCellIndex'
import { setFieldRecordsAction } from '../../State/actions'

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
  
