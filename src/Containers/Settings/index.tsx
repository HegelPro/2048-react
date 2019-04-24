import React, { useState } from 'react'
import Input from '@material-ui/core/Input';
import FormGroup from '@material-ui/core/FormGroup';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'redux-react-hook';
import { matchPath } from 'react-router';

import {
  setFieldRowsAction,
  setFieldColumnsAction,
} from './actions'

const Settings = () => {
  const dispatch = useDispatch()
  const [rowsInputValue, setRowsInputValue] = useState(0)
  const [columnsInputValue, setColumnsInputValue] = useState(0)
  return (
    <FormGroup>
      <Input
        defaultValue='number'
        title='rows'
        value={rowsInputValue}
        onChange={({target: { value }}) => setRowsInputValue(+value)}
      />
      <Input
        title='columns'
        value={columnsInputValue}
        onChange={({target: { value }}) => setColumnsInputValue(+value)}
      />
      <Button
        onClick={() => {
          dispatch(setFieldRowsAction(rowsInputValue))
          dispatch(setFieldColumnsAction(columnsInputValue))
        }}
      >Submit</Button>
    </FormGroup>
  )
}
  

export default Settings
