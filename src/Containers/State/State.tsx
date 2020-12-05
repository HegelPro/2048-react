import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/types'
import FieldStateRecordHelper from '../../models/state/helpers'
import Records from '../../Components/Records/Records'

const Field = () => {
  const records = useSelector((state: RootState) => state.state)
  const field = useSelector((state: RootState) => state.field.current)

  const record = FieldStateRecordHelper.getRecordByPosition(records, {
    x: field.columns,
    y: field.rows,
  }).extract()

  return (
    <Records
      record={record}
      field={field}
    />
  )
}
export default Field
