// import FieldHeader from '../../Components/FieldHeader/FieldHeader'
import FieldView from '../../Components/Field/Field'
import Grid from '@material-ui/core/Grid'
import React, { useCallback, useEffect, useReducer, useRef, useState } from 'react'
// import { RootState } from '../../store/types'
// import { useSelector } from 'react-redux'
import * as Field from '../../models/field'
import {createStart} from '../../models/field'
import {pipe} from 'fp-ts/function'
import { FieldSettingsRecord } from '../../models/settings/schema'
import { Diraction } from '../../models/diraction'
import * as IO from 'fp-ts/lib/IO'
import { useFpState } from '../../state/fpState'
import CatchWindowEvents from '../CatchWindowEvents/CatchWindowEvents'
import { moveCellsInDiraction } from '../../engine/moveCellsInDiraction'

const kek: Record<Diraction, [Diraction, Diraction]> = {
  'UP': ['RIGHT', 'UP'],
  'RIGHT': ['DOWN', 'RIGHT'],
  'DOWN': ['LEFT', 'DOWN'],
  'LEFT': ['UP', 'LEFT'],
}

const Game = () => {
  // const field = useSelector((state: RootState) => state.field.current)
  // const prevField = useSelector((state: RootState) => state.field.previous)
  // const fieldSettings = useSelector((state: RootState) => state.settings)

  const {state, setFpState} = useFpState()

  const moveCells = useCallback((diraction: Diraction) => setFpState(state => ({
    ...state,
    field: pipe(
      state.field,
      moveCellsInDiraction(kek[diraction])
    )
  })), [setFpState])

  return (
    <CatchWindowEvents onMoveInDiraction={moveCells} onBack={() => {}}>
      <Grid container spacing={1} direction="column" alignItems="center">
        {/* <Grid item>
          <FieldHeader />
        </Grid> */}

        <Grid item>
          <FieldView
            field={state.field}
            // prevField={prevField}
            settings={state.settings}
            // field={[]}
            // settings={{rows: 0, columns: 0}}
          />
        </Grid>
      </Grid>
    </CatchWindowEvents>
  )
}

export default Game
