import { RootState } from "../../store/types";

export function selectSettingRows(state: RootState) {
  return state.settings.rows
}

export function selectSettingsColumns(state: RootState) {
  return state.settings.columns
}