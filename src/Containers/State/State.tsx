import * as O from 'fp-ts/Option'
import React from 'react'
import Records from '../../Components/Records/Records'
// import { useSelector } from 'react-redux'
import {useFpState} from '../../state/fpState'

const State = () => {
    const {state} = useFpState()
//   const records = useSelector((state: RootState) => state.state)
//   const field = useSelector((state: RootState) => state.field.current)

//   const record = FieldStateRecordHelper.getRecordByPosition(records, {
//     x: Field.getColumns(field),
//     y: Field.getRows(field),
//   })

  return (
    <Records
      record={O.none}
      field={state.field}
    />
  )
}
export default State
