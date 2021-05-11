import { setCurrentFieldAction, setPreviousFieldAction } from '../actions'
import FieldHelpers from '../../../models/field/helpers'
import FieldStateRecordHelper from '../../../models/state/helpers'
import { Thunk } from '../../../store/types'
import { Vector } from '../../../models/vector/schema'
import doNextGameStep from '../../../engine/doNextGameStep'
import selectRandomAvaibleCellPoint from '../../../engine/selectRandomAvaibleCellIndex'
import { setFieldRecordsAction } from '../../State/actions'
import { Diraction } from '../../../models/vector/constants'

function moveCellsThunk(diractionOne: Diraction, diractionTwo: Diraction): Thunk<void> {
  return function(dispatch, getState) {
    const savedField = getState().field.current
    const movedField = doNextGameStep(savedField, diractionOne, diractionTwo)
    
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
  
