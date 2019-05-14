import React from 'react'
import { useMappedState } from 'redux-react-hook'

import { RootState } from '../../store/types'
import Records from '../../Components/Records'
import { selectCurrentField } from '../Game/selectors'
import { VectorRecord } from '../../models/vector'

import { selectFieldState } from './selectors'

const mapState = (state: RootState) => ({
  fieldState: selectFieldState(state),
  field: selectCurrentField(state),
})

const Field = () => {
  const {
    field,
    fieldState,
  } = useMappedState(mapState)
  let recordPosition = new VectorRecord({
    x: field.columns,
    y: field.rows,
  })
  recordPosition = field.columns > field.rows
    ? recordPosition
    : recordPosition.image()
  return (
    <Records
      record={fieldState.getRecordByPosition(recordPosition)}
      field={field}
    />
  )
}
export default Field
