import * as A from 'fp-ts/Array'
import * as O from 'fp-ts/Option'
import React, { useCallback } from 'react'
import CatchWindowEvents from '../CatchWindowEvents/CatchWindowEvents'
import { Diraction } from '../../models/diraction'
import FieldHeader from '../../Components/FieldHeader/FieldHeader'
import FieldView from '../../Components/Field/Field'
import Grid from '@material-ui/core/Grid'
import { moveCellsInDiraction } from '../../engine/moveCellsInDiraction'
import {pipe} from 'fp-ts/function'
import { useFpState } from '../../state/fpState'

const moveDiractionToIterateDirection: Record<Diraction, [Diraction, Diraction]> = {
  'UP': ['RIGHT', 'UP'],
  'RIGHT': ['DOWN', 'RIGHT'],
  'DOWN': ['LEFT', 'DOWN'],
  'LEFT': ['UP', 'LEFT'],
}

const Game = () => {
  const {state, setFpState} = useFpState()

  const moveCells = useCallback((diraction: Diraction) => setFpState(fpState => {
    return pipe(
      fpState.field,
      moveCellsInDiraction(moveDiractionToIterateDirection[diraction]),
      O.map(newField => ({
        ...fpState,
        fieldHistory: [...fpState.fieldHistory, fpState.field],
        field: newField
      })),
      O.getOrElse(() => fpState)
    )
  }), [setFpState])

  return (
    <CatchWindowEvents onMoveInDiraction={moveCells} onBack={() => {}}>
      <Grid container spacing={1} direction="column" alignItems="center">
        <Grid item>
          <FieldHeader />
        </Grid>

        <Grid item>
          <FieldView
            field={state.field}
            previousField={A.last(state.fieldHistory)}
            settings={state.settings}
          />
        </Grid>
      </Grid>
    </CatchWindowEvents>
  )
}

export default Game
