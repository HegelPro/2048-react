import React, { useEffect, useState } from 'react'
import { useDispatch, useMappedState } from 'redux-react-hook'
import FieldView from '../../Components/Field'
import { RootState } from '../../store/types'
import {
  initField,
  moveCells,
  returnPrevField,
} from './actions'
import {
  selectPreviousField,
  selectCurrentField,
} from './selectors'
import { moveDiraction$ } from '../../streams/moveDiraction'
import FieldHeader from '../../Components/FieldHeader'
import { selectSettingRows, selectSettingsColumns } from '../Settings/selectors'

const mapState = (state: RootState) => ({
  field: selectCurrentField(state),
  prevField: selectPreviousField(state),
  rows: selectSettingRows(state),
  columns: selectSettingsColumns(state),
})

const Field = () => {
  const dispatch = useDispatch()
  const {
    field,
    prevField,
    rows,
    columns,
  } = useMappedState(mapState)
  const [isInitField, setIsInitField] = useState(false)
  useEffect(() => {
    const subscriber = moveDiraction$.subscribe((diraction) => {
      if (diraction !== undefined) {
        dispatch(moveCells(diraction))
      }
    })
    if (!isInitField) {
      dispatch(initField({ rows, columns }))
      setIsInitField(true)
    }
    return () => subscriber.unsubscribe()
  })
  return (
    <>
      <FieldHeader
        field={field}
        prevField={prevField}
        onClickBack={() => dispatch(returnPrevField())}
        onClickRestart={() => dispatch(initField({ rows, columns }))}
      />
      <FieldView field={field} prevField={prevField} />
    </>
  )
}
export default Field
