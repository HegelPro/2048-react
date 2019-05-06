import React from 'react'
import { useMappedState } from 'redux-react-hook'

import { RootState } from '../../store/types'
import Records from '../../Components/Records'
import { selectCurrentField } from '../Field/selectors'
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
  return (
    <Records
      record={fieldState.getRecordByPosition(new VectorRecord({
        x: field.columns,
        y: field.rows,
      }))}
      field={field}
    />
  )
}
export default Field
