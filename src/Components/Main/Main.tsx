import {Route, Switch} from 'react-router-dom'
import Field from '../../Containers/Game/Game'
import GameBlock from '../GameBlock/GameBlock'
import NotFound from '../NotFound/NotFound'
import React from 'react'
import Settings from '../../Containers/Settings/Settings'

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
