import React, { useEffect, useState } from 'react'
import { useDispatch, useMappedState } from 'redux-react-hook'

import FieldView from '../../Components/Field'
import { RootState } from '../../store/types'
import FieldHeader from '../../Components/FieldHeader'
import GameContainer from '../../Components/GameContainer'
import { selectSettings } from '../Settings/selectors'

import { initFieldFromLocalStorageAction } from './actions'
import {
  selectCurrentField,
  selectPreviousField,
} from './selectors'

const mapState = (state: RootState) => ({
  field: selectCurrentField(state),
  prevField: selectPreviousField(state),
  fieldSettings: selectSettings(state),
})

const Game = () => {
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
    <GameContainer>
      <FieldHeader />
      <FieldView
        field={field}
        prevField={prevField}
        settings={fieldSettings}
      />
    </GameContainer>
  )
}

export default Game
