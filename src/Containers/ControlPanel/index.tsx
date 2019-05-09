import React from 'react'
import { useDispatch, useMappedState } from 'redux-react-hook'

import { RootState } from '../../store/types'

import {
  initFieldAction,
  returnPrevFieldAction,
} from '../Game/actions'
import {
  selectCurrentField,
  selectPreviousField,
} from '../Game/selectors'

import Fab from '@material-ui/core/Fab'
import Cached from '@material-ui/icons/Cached'
import Settings from '@material-ui/icons/Settings'
import Reply from '@material-ui/icons/Reply'
import Grid from '@material-ui/core/Grid'

import history from '../../setup/history'

const mapState = (state: RootState) => ({
  field: selectCurrentField(state),
  prevField: selectPreviousField(state),
})

const ControlPanel = () => {
  const dispatch = useDispatch()
  const {
    field,
    prevField,
  } = useMappedState(mapState)
  return (
    <Grid
      container
      spacing={8}
    >
      <Grid item>
        <Fab
          color='primary'
          aria-label='Previous Field'
          size='small'
          onClick={() => dispatch(returnPrevFieldAction())}
          disabled={field.cells.equals(prevField.cells)}
        ><Reply /></Fab>
      </Grid>
      <Grid item>
        <Fab
          color='primary'
          aria-label='Restart'
          size='small'
          onClick={() => dispatch(initFieldAction())}
        ><Cached /></Fab>
      </Grid>
      <Grid item>
        <Fab
          aria-label='Settings'
          size='small'
          color='primary'
          onClick={() => history.push('/settings')}
        ><Settings /></Fab>
      </Grid>
    </Grid>
  )
}

export default ControlPanel
