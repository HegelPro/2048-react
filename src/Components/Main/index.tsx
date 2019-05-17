import React from 'react'
import {
  Route,
  Switch,
} from 'react-router-dom'
import Box from '@material-ui/core/Box'

import Field from '../../Containers/Game'
import Settings from '../../Containers/Settings'
import GameContainer from '../GameContainer'

const Main = () => (
  <Box
    display='flex'
    justifyContent='center'
    p={4}
  >
    <Box>
      <GameContainer>
        <Switch>
          <Route exact path='/'>
            <Field />
          </Route>
          <Route exact path='/settings'>
            <Settings />
          </Route>
        </Switch>
      </GameContainer>
    </Box>
  </Box>
)

export default Main
