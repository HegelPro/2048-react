import React from 'react'
import { useSelector } from 'react-redux'

import { RootState } from '../../store/types'
import Records from '../../Components/Records'
import { Vector, VectorHelpers } from '../../models/vector'


const Field = () => {
  const field = useSelector((state: RootState) => state.field.current)
  const fieldState = useSelector((state: RootState) => state.state)

  const recordPosition: Vector = VectorHelpers.normolize({
    x: field.columns,
    y: field.rows,
  })

  return (
    <Records
      record={fieldState.getRecordByPosition(recordPosition)}
      field={field}
    />
  )
}
export default Field
