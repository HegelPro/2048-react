import React from 'react'
import { useDispatch, useMappedState } from 'redux-react-hook'

import { RootState } from '../../store/types'
import Records from '../../Components/Records'
import { selectCurrentField } from '../Field/selectors'

import { selectFieldRecords } from './selectors'

const mapState = (state: RootState) => ({
  records: selectFieldRecords(state),
  field: selectCurrentField(state),
})

const Field = () => {
  const {
    field,
    records,
  } = useMappedState(mapState)
  return (
    <Records
      records={records}
      field={field}
    />
  )
}
export default Field
