import React from 'react'
import { useDispatch, useMappedState } from 'redux-react-hook'
import Fab from '@material-ui/core/Fab'
import Cached from '@material-ui/icons/Cached'
import Settings from '@material-ui/icons/Settings'
import Reply from '@material-ui/icons/Reply'
import Box from '@material-ui/core/Box'
import withWidth, { WithWidth } from '@material-ui/core/withWidth'

import {
  initFieldAction,
  returnPrevFieldAction,
} from '../Game/actions'
import {
  selectCurrentField,
  selectPreviousField,
} from '../Game/selectors'
import { RootState } from '../../store/types'
import history from '../../setup/history'

import { fabSizes } from './config'

const mapState = (state: RootState) => ({
  field: selectCurrentField(state),
  prevField: selectPreviousField(state),
})

interface IProps extends WithWidth {}

const ControlPanel = ({ width }: IProps) => {
  const dispatch = useDispatch()
  const {
    field,
    prevField,
  } = useMappedState(mapState)
  return (
    <Box display='flex'>
      <Box mb={1}>
        <Fab
          color='primary'
          aria-label='Previous Field'
          size={fabSizes[width]}
          onClick={() => dispatch(returnPrevFieldAction())}
          disabled={field.cells.equals(prevField.cells)}
        >
          <Reply />
        </Fab>
      </Box>
      <Box mb={1} ml={1}>
        <Fab
          color='primary'
          aria-label='Restart'
          size={fabSizes[width]}
          onClick={() => dispatch(initFieldAction())}
        >
          <Cached />
        </Fab>
      </Box>
      <Box mb={1} ml={1}>
        <Fab
          aria-label='Settings'
          size={fabSizes[width]}
          color='primary'
          onClick={() => history.push('/settings')}
        >
          <Settings />
        </Fab>
      </Box>
    </Box>
  )
}

export default withWidth()(ControlPanel)
