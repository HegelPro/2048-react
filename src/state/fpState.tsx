import * as Field from '../models/field'
import * as IO from 'fp-ts/lib/IO'
import * as S from 'fp-ts/State'
import React, { createContext, useContext, useRef, MutableRefObject, useReducer } from 'react'
import { FieldSettingsRecord } from '../models/settings/schema'
import {flow, pipe} from 'fp-ts/function'

export interface GlobalState {
    field: Field.Field;
    settings: FieldSettingsRecord;
}

const defaultState: GlobalState = {
    field: Field.createStart({rows: 3, columns: 3}),
    settings: {rows: 3, columns: 3},
}

const StateContext = createContext<{
    state: GlobalState,
    mutation: (state: S.State<GlobalState, void>) => void
    setFpState: (setState: (state: GlobalState) => GlobalState) => IO.IO<void>
}>({state: defaultState, mutation: () => {}, setFpState: () => () => {}})

let fpState = defaultState

const setFpState = (setState: (state: GlobalState) => GlobalState): IO.IO<void> => () => {
    fpState = setState(fpState)
}

const getFpState: IO.IO<GlobalState> = () => fpState

export const StateProvider = ({children}: {children: React.ReactNode}) => {
    const [, forceRender] = useReducer((s) => s + 1, 0)


    // const mutation = useCallback(
    //     (fdf: S.State<GlobalState, void>) => {
    //         setState(pipe(
    //             fdf,
    //             S.execute(state),
    //         ))
    //     },
    //     [state]
    // )

    return (
        <StateContext.Provider value={{
            state: getFpState(),
            setFpState: flow(
                setFpState,
                IO.chain(() => forceRender)
            ),
            mutation: () => {}
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useFpState = () => {
    const state = useContext(StateContext)
    return state
}

export default StateContext