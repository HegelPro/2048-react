import FieldHelpers from '../../models/field/helpers'
import FieldStateRecordHelper from '../../models/state/helpers'
import React from 'react'
import Records from '../../Components/Records/Records'
import { RootState } from '../../store/types'
import { useSelector } from 'react-redux'

const Field = () => {
  const records = useSelector((state: RootState) => state.state)
  const field = useSelector((state: RootState) => state.field.current)

  const record = FieldStateRecordHelper.getRecordByPosition(records, {
    x: FieldHelpers.getColumns(field),
    y: FieldHelpers.getRows(field),
  })

  return (
    <Records
      record={record}
      field={field}
    />
  )
}
export default Field
