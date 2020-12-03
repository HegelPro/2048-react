import selectRandomAvaibleCellPoint from "../../../engine/selectRandomAvaibleCellIndex";
import { FieldRecordHelper } from "../../../models/field";
import { FieldStateRecordHelper } from "../../../models/state";
import { Thunk } from "../../../store/types";
import { setFieldRecordsAction } from "../../State/actions";
import { setCurrentFieldAction, setPreviousFieldAction } from "../actions";

function initFieldThunk(): Thunk<void> {
    return function(dispatch, getState) {
        const state = getState()
        const {
            columns,
            rows,
        } = state.settings

        const initField = FieldRecordHelper.init({columns, rows})
        const startField = selectRandomAvaibleCellPoint(initField)
        
        dispatch(setCurrentFieldAction(startField))
        dispatch(setPreviousFieldAction(startField))

        const stateRecords = FieldStateRecordHelper.updateRecordValue(state.state, startField)
        dispatch(setFieldRecordsAction(stateRecords))
    };
}

export default initFieldThunk
