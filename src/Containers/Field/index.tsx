import React, { useEffect, useState } from 'react'
import { useDispatch, useMappedState } from 'redux-react-hook'

import FieldView from '../../Components/Field'
import { RootState } from '../../store/types'
import FieldHeader from '../../Components/FieldHeader'
import { selectSettings } from '../Settings/selectors'

import {
  initFieldAction,
  initFieldFromLocalStorageAction,
  returnPrevFieldAction,
} from './actions'
import {
  selectCurrentField,
  selectPreviousField,
} from './selectors'

const mapState = (state: RootState) => ({
  field: selectCurrentField(state),
  prevField: selectPreviousField(state),
  fieldSettings: selectSettings(state),
})

const Field = () => {
  const dispatch = useDispatch()
  const {
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
