import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Field from '../../Containers/Game'
import Settings from '../../Containers/Settings'
import GameBlock from '../../Blocks/GameBlock'
import NotFound from '../NotFound'

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
