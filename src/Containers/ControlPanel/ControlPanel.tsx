import { useDispatch, useSelector } from 'react-redux'
import withWidth, { WithWidth } from '@material-ui/core/withWidth'
import Cached from '@material-ui/icons/Cached'
import Fab from '@material-ui/core/Fab'
import FieldHelpers from '../../models/field/helpers'
import Grid from '@material-ui/core/Grid'
import React from 'react'
import Reply from '@material-ui/icons/Reply'
import { RootState } from '../../store/types'
import Settings from '@material-ui/icons/Settings'
import {fabSizes} from './config'
import history from '../../setup/history'
import initFieldThunk from '../Game/thunks/initField'
import {setCurrentFieldAction} from '../Game/actions'

interface ControlPanelProps extends WithWidth {}

const ControlPanel = ({ width }: ControlPanelProps) => {
  const dispatch = useDispatch()

  const field = useSelector((state: RootState) => state.field.current)
  const prevField = useSelector((state: RootState) => state.field.previous)

  return (
    <Grid container spacing={1}>
      <Grid item>
        <Fab
          color='primary'
          aria-label='Previous Field'
          size={fabSizes[width]}
          onClick={() => dispatch(setCurrentFieldAction(prevField))}
          disabled={FieldHelpers.equals(field, prevField)}
        >
          <Reply />
        </Fab>
      </Grid>
      <Grid item>
        <Fab
          color='primary'
          aria-label='Restart'
          size={fabSizes[width]}
          onClick={() => dispatch(initFieldThunk())}
        >
          <Cached />
        </Fab>
      </Grid>
      <Grid item>
        <Fab
          aria-label='Settings'
          size={fabSizes[width]}
          color='primary'
          onClick={() => history.push('/settings')}
        >
          <Settings />
        </Fab>
      </Grid>
    </Grid>
  )
}

export default withWidth()(ControlPanel)
