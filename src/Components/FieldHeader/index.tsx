import React from 'react'
import Box from '@material-ui/core/Box'

import State from '../../Containers/State'
import ControlPanel from '../../Containers/ControlPanel'

const FieldHeader = () => (
  <Box
    display='flex'
    justifyContent='space-between'
    alignItems='center'
    flexDirection='row'
    flexWrap='wrap'
  >
    <State />
    <ControlPanel />
  </Box>
)

export default FieldHeader
