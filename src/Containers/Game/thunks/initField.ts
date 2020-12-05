import FieldHelpers from '../../../models/field/helpers'
import FieldStateRecordHelper from '../../../models/state/helpers'
import { Thunk } from '../../../store/types'
import { setFieldRecordsAction } from '../../State/actions'
import { setCurrentFieldAction, setPreviousFieldAction } from '../actions'

function initFieldThunk(cb?: () => void): Thunk<void> {
    return function(dispatch, getState) {
        const state = getState()
        const startField = FieldHelpers.createStart(state.settings)
        const newStateRecord = FieldStateRecordHelper.updateRecordValue(state.state, startField)
        
        dispatch(setCurrentFieldAction(startField))
        dispatch(setPreviousFieldAction(startField))
        dispatch(setFieldRecordsAction(newStateRecord))

        if (cb) {
            cb()
        }
    }
}

export default initFieldThunk
