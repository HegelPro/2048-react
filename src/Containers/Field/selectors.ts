import { RootState } from "../../store/types";

export function selectField(state: RootState) {
  return state.field
}