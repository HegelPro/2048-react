import React from 'react'
import {
  Route,
  Switch,
} from 'react-router-dom'

import Field from '../../Containers/Game'
import Settings from '../../Containers/Settings'
import GameBlock from '../../Blocks/GameBlock'

const Main = () => (
  <GameBlock>
    <Switch>
      <Route exact path='/'>
        <Field />
      </Route>
      <Route exact path='/settings'>
        <Settings />
      </Route>
    </Switch>
  </GameBlock>
)

export default Main
