import React, { useState } from 'react'
import { useDispatch, useMappedState } from 'redux-react-hook'
import Button from '@material-ui/core/Button'
import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'
import Box from '@material-ui/core/Box'

import history from '../../setup/history'
import { RootState } from '../../store/types'
import { initFieldAction } from '../Game/actions'
import TextFieldGroup from '../../Components/TextFieldGroup'

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
    <TextFieldGroup>
      <Box mb={1}>
        <TextField
          select
          fullWidth
          label='Rows amout:'
          title='Rows'
          value={rowsInputValue}
          onChange={({ target: { value } }) => setRowsInputValue(+value)}
        >{menuItemsForSelectors}</TextField>
      </Box>
      <Box mb={1}>
        <TextField
          select
          fullWidth
          label='Columns amout:'
          title='Columns'
          value={columnsInputValue}
          onChange={({ target: { value } }) => setColumnsInputValue(+value)}
        >{menuItemsForSelectors}</TextField>
      </Box>
      <Box mb={1}>
        <Button
          color='primary'
          variant='contained'
          onClick={() => {
            dispatch(setFieldSettingsAction({
              rows: rowsInputValue,
              columns: columnsInputValue,
            }))
            dispatch(initFieldAction())
            history.push('/')
          }}
        >Submit</Button>
      </Box>
    </TextFieldGroup>
  )
}

export default Settings
