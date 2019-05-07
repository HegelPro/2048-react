import React, { useState } from 'react'
import { useDispatch, useMappedState } from 'redux-react-hook'
import Button from '@material-ui/core/Button'
import MenuItem from '@material-ui/core/MenuItem'
import FormGroup from '@material-ui/core/FormGroup'
import TextField from '@material-ui/core/TextField'

import history from '../../setup/history'
import { RootState } from '../../store/types'
import { initFieldAction } from '../Game/actions'

import { selectSettings } from './selectors'
import { avaibleSizesForField } from './config'
import { setFieldSettingsAction } from './actions'

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
        onChange={({ target: { value } }) => setRowsInputValue(+value)}
      >{menuItemsForSelectors}</TextField>
      <TextField
        select
        title='columns'
        value={columnsInputValue}
        onChange={({ target: { value } }) => setColumnsInputValue(+value)}
      >{menuItemsForSelectors}</TextField>
      <Button
        onClick={() => {
          dispatch(setFieldSettingsAction({
            rows: rowsInputValue,
            columns: columnsInputValue,
          }))
          dispatch(initFieldAction())
          history.push('/')
        }}
      >Submit</Button>
    </FormGroup>
  )
}

export default Settings
