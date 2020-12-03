import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Field from '../../Containers/Game/Game'
import Settings from '../../Containers/Settings/Settings'
import GameBlock from '../../Blocks/GameBlock/GameBlock'
import NotFound from '../NotFound/NotFound'

const Main = () => (
  <GameBlock>
    <Switch>
      <Route exact path='/' component={Field} />
      <Route exact path='/settings' component={Settings} />
      <Route component={NotFound} />
    </Switch>
  </GameBlock>
)

export default Main
