import * as Field from '../models/field'
import * as IO from 'fp-ts/lib/IO'
import * as S from 'fp-ts/State'
import React, { createContext, useContext, useRef, MutableRefObject, useReducer } from 'react'
import { FieldSettingsRecord } from '../models/fieldSettings'
import {flow, pipe} from 'fp-ts/function'
import { RecordElement } from '../models/recordElement'

export interface GlobalState {
    field: Field.Field;
    fieldHistory: Field.Field[];
    settings: FieldSettingsRecord;
    records: RecordElement[]
}

const defaultFpState: GlobalState = {
    field: Field.createStart({rows: 3, columns: 3}),
    fieldHistory: [],
    settings: {rows: 3, columns: 3},
    records: [],
}

const FpStateContext = createContext<{
    state: GlobalState,
    mutation: (state: S.State<GlobalState, void>) => void
    setFpState: (setState: (state: GlobalState) => GlobalState) => IO.IO<void>
}>({state: defaultFpState, mutation: () => {}, setFpState: () => () => {}})

let fpState = defaultFpState

const setFpState = (setState: (state: GlobalState) => GlobalState): IO.IO<void> => () => {
    fpState = setState(fpState)
}

const getFpState: IO.IO<GlobalState> = () => fpState
// TODO need to refactor application main context. Need to choose a way to have a state
export const FpStateProvider = ({children}: {children: React.ReactNode}) => {
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
    console.log(getFpState())

    return (
        <FpStateContext.Provider value={{
            state: getFpState(),
            setFpState: flow(
                setFpState,
                IO.chain(() => forceRender)
            ),
            mutation: () => {}
        }}>
            {children}
        </FpStateContext.Provider>
    )
}

export const useFpState = () => {
    return useContext(FpStateContext)
}

export default FpStateContext