import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import FieldView from '../../Components/Field'
import { RootState } from '../../store/types'
import FieldHeader from '../../Components/FieldHeader'

import { initFieldFromLocalStorageAction } from './actions'
import { useSelector } from 'react-redux'

const Game = () => {
  const dispatch = useDispatch()
  const field = useSelector((state: RootState) => state.field.current)
  const prevField = useSelector((state: RootState) => state.field.previous)
  const fieldSettings = useSelector((state: RootState) => state.settings)

  const [isInitField, setIsInitField] = useState(false)

  useEffect(() => {
    if (!isInitField) {
      dispatch(initFieldFromLocalStorageAction())
      setIsInitField(true)
    }
  }, [isInitField, dispatch])
  return (
    <>
      <FieldHeader />
      <FieldView
        field={field}
        prevField={prevField}
        settings={fieldSettings}
      />
    </>
  )
}

export default Game
