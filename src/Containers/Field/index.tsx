import React, { useEffect, useState } from 'react'
import { useDispatch, useMappedState } from 'redux-react-hook'
import FieldView from '../../Components/Field'
import { RootState } from '../../store/types'
import {
  initFieldAction,
  initFieldFromLocalStorageAction,
  returnPrevFieldAction,
} from './actions'
import {
  selectCurrentField,
  selectPreviousField,
  selectFieldRecords,
} from './selectors'
import FieldHeader from '../../Components/FieldHeader'
import { selectSettings } from '../Settings/selectors'

const mapState = (state: RootState) => ({
  field: selectCurrentField(state),
  prevField: selectPreviousField(state),
  fieldSettings: selectSettings(state),
  records: selectFieldRecords(state),
})

const Field = () => {
  const dispatch = useDispatch()
  const {
    records,
    field,
    prevField,
    fieldSettings,
  } = useMappedState(mapState)
  const [isInitField, setIsInitField] = useState(false)
  useEffect(() => {
    if (!isInitField) {
      dispatch(initFieldFromLocalStorageAction())
      setIsInitField(true)
    }
  })
  return (
    <>
      <FieldHeader
        field={field}
        records={records}
        prevField={prevField}
        onClickBack={() => dispatch(returnPrevFieldAction())}
        onClickRestart={() => dispatch(initFieldAction())}
      />
      <FieldView
        field={field}
        prevField={prevField}
        settings={fieldSettings}
      />
    </>
  )
}
export default Field
