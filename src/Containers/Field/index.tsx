import React, { useEffect, useState } from "react";
import { useDispatch, useMappedState } from 'redux-react-hook';
import FieldView from '../../Components/Field'
import { RootState } from '../../store/types'

import {
  initField,
  moveCells,
} from './actions'
import {
  selectPrevField,
  selectCurrentField,
} from './selectors'
import { moveDiraction$ } from "../../streams/moveDiraction";


interface Props {
  rows: number
  columns: number
}

const mapState = (state: RootState) => ({
  field: selectCurrentField(state),
  prevField: selectPrevField(state),
})

const Field = ({
  rows,
  columns,
}: Props) => {
  const dispatch = useDispatch()
  const { field, prevField } = useMappedState(mapState)
  const [isInitField, setIsInitField] = useState(false);
  useEffect(() => {
    const subscriber = moveDiraction$.subscribe(diraction => {
      if(diraction !== undefined) {
        dispatch(moveCells(diraction))
      }
    })
    if(!isInitField) {
      dispatch(initField({ rows, columns }))
      setIsInitField(true)
    }
    return () => subscriber.unsubscribe()
  })
  return <FieldView field={field} prevField={prevField} />
}
export default Field;