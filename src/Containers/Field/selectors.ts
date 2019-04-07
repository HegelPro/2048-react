import { RootState } from "../../store/types";

export function selectCurrentField(state: RootState) {
  return state.field.current
}

export function selectPrevField(state: RootState) {
  return state.field.history.last(undefined)
}