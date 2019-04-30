import React, { useState } from 'react'
import FormGroup from '@material-ui/core/FormGroup'
import Button from '@material-ui/core/Button'
import { useDispatch, useMappedState } from 'redux-react-hook'

import history from '../../setup/history'
import {
  setFieldRowsAction,
  setFieldColumnsAction,
} from './actions'
import { avaibleSizesForField } from './config'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import { RootState } from '../../store/types'
import { selectSettings } from './selectors'

const mapState = (state: RootState) => ({
  fieldSettings: selectSettings(state),
})

const Settings = () => {
  const dispatch = useDispatch()
  const { fieldSettings } = useMappedState(mapState)
  const [rowsInputValue, setRowsInputValue] = useState(fieldSettings.rows)
  const [columnsInputValue, setColumnsInputValue] = useState(fieldSettings.columns)
  const menuItemsForSelectors = avaibleSizesForField.map((elem) => <MenuItem key={elem} value={elem}>{elem}</MenuItem>)
  return (
    <FormGroup>
      <TextField
        select
        title='rows'
        value={rowsInputValue}
        onChange={({target: { value }}) => setRowsInputValue(+value)}
      >{menuItemsForSelectors}</TextField>
      <TextField
        select
        title='columns'
        value={columnsInputValue}
        onChange={({target: { value }}) => setColumnsInputValue(+value)}
      >{menuItemsForSelectors}</TextField>
      <Button
        onClick={() => {
          dispatch(setFieldRowsAction(rowsInputValue))
          dispatch(setFieldColumnsAction(columnsInputValue))
          history.push('/')
        }}
      >Submit</Button>
    </FormGroup>
  )
}

export default Settings
