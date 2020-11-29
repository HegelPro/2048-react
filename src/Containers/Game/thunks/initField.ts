import selectRandomAvaibleCellPoint from "../../../engine/selectRandomAvaibleCellIndex";
import { FieldRecordHelper } from "../../../models/field";
import actions from "../../../store/actions";
import { Thunk } from "../../../store/types";

function initFieldThunk(): Thunk<void> {
    return function(dispatch, getState) {
        const state = getState()
        const {
            columns,
            rows,
        } = state.settings

        const initField = FieldRecordHelper.init({columns, rows})
        const startField = selectRandomAvaibleCellPoint(initField)

        dispatch(actions.field.setCurrentFieldAction(startField))
        dispatch(actions.field.setPreviousFieldAction(startField))
    };
}

export default initFieldThunk
