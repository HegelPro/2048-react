import selectRandomAvaibleCellPoint from "../../../engine/selectRandomAvaibleCellIndex";
import { FieldRecordHelper } from "../../../models/field";
import { Thunk } from "../../../store/types";
import { setCurrentFieldAction, setPreviousFieldAction } from "../actions";

function initFieldFromLSThunk(): Thunk<void> {
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
    };
}

export default initFieldFromLSThunk
