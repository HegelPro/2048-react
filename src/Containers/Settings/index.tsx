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
import {
  selectSettingRows,
  selectSettingsColumns,
} from './selectors'

const mapState = (state: RootState) => ({
  rows: selectSettingRows(state),
  columns: selectSettingsColumns(state),
})

const Settings = () => {
  const dispatch = useDispatch()
  const {
    rows,
    columns,
  } = useMappedState(mapState)
  const [rowsInputValue, setRowsInputValue] = useState(rows)
  const [columnsInputValue, setColumnsInputValue] = useState(columns)
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
