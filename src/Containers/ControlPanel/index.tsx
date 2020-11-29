import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Fab from '@material-ui/core/Fab'
import Cached from '@material-ui/icons/Cached'
import Settings from '@material-ui/icons/Settings'
import Reply from '@material-ui/icons/Reply'
import Grid from '@material-ui/core/Grid'
import withWidth, { WithWidth } from '@material-ui/core/withWidth'

import {setCurrentFieldAction} from '../Game/actions'
import initFieldThunks from '../Game/thunks/initField'
import { RootState } from '../../store/types'
import history from '../../setup/history'

import { fabSizes } from './config'

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
          // TODO поправить потом выкинута equal от IM.LIST
          disabled={field.cells === prevField.cells}
        >
          <Reply />
        </Fab>
      </Grid>
      <Grid item>
        <Fab
          color='primary'
          aria-label='Restart'
          size={fabSizes[width]}
          onClick={() => dispatch(initFieldThunks())}
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
