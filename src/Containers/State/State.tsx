import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/types'
import FieldStateRecordHelper from '../../models/state/helpers'
import Records from '../../Components/Records/Records'
import { Vector } from '../../models/vector/schema'
import VectorHelpers from '../../models/vector/helpers'

const Field = () => {
  const records = useSelector((state: RootState) => state.state)
  const field = useSelector((state: RootState) => state.field.current)

  // TODO закинуть в FieldStateRecordHelper.getRecordByPosition
  const recordPosition: Vector = VectorHelpers.normolize({
    x: field.columns,
    y: field.rows,
  })

  const record = FieldStateRecordHelper.getRecordByPosition(records, recordPosition).extract()

  return (
    <Records
      record={record}
      field={field}
    />
  )
}
export default Field
