import * as Field from '../../models/field'
import withWidth, { WithWidth } from '@material-ui/core/withWidth'
import Cached from '@material-ui/icons/Cached'
import Fab from '@material-ui/core/Fab'
import Grid from '@material-ui/core/Grid'
import React, { useCallback } from 'react'
import Reply from '@material-ui/icons/Reply'
import Settings from '@material-ui/icons/Settings'
import {fabSizes} from './config'
import history from '../../setup/history'
import { useFpState } from '../../state/fpState'
import * as A from 'fp-ts/Array'
import * as O from 'fp-ts/Option'

interface ControlPanelProps extends WithWidth {}

const ControlPanel = withWidth()(({ width }: ControlPanelProps) => {
    const {state, setFpState} = useFpState()

    const field = state.field
    // TODO find previues
    const prevField = A.last(state.fieldHistory)

    // TODO fix
    const onPrevious = useCallback(
        () => setFpState(state => ({
            ...state,
            fieldHistory: state.fieldHistory.slice(0, state.fieldHistory.length - 1),
            field: O.getOrElse(() => state.field)(prevField)
        }))(),
        [prevField, setFpState]
    )

    const onRestart = useCallback(
        () => setFpState(state => ({
            ...state,
            fieldHistory: [],
            field: Field.createStart(state.settings)
        }))(),
        [setFpState]
    )

    const onOpenSettings = useCallback(
        () => history.push('/settings'),
        []
    )

    return (
        <Grid container spacing={1}>
            <Grid item>
                <Fab
                    color='primary'
                    aria-label='Previous Field'
                    size={fabSizes[width]}
                    onClick={onPrevious}
                    disabled={O.getEq(Field.eqField).equals(O.some(field), prevField)}
                >
                    <Reply />
                </Fab>
            </Grid>
            <Grid item>
                <Fab
                    color='primary'
                    aria-label='Restart'
                    size={fabSizes[width]}
                    onClick={onRestart}
                >
                    <Cached />
                </Fab>
            </Grid>
            <Grid item>
                <Fab
                    aria-label='Settings'
                    size={fabSizes[width]}
                    color='primary'
                    onClick={onOpenSettings}
                >
                    <Settings />
                </Fab>
            </Grid>
        </Grid>
    )
})

export default ControlPanel
