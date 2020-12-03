import { Codec, GetType, number } from "purify-ts";

export type FieldSettingsRecord = GetType<typeof FieldSettingsSchema>

export const FieldSettingsSchema = Codec.interface({
  rows: number,
  columns: number,
})
