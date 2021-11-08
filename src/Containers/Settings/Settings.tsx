import * as Field from '../../models/field'
import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'
import { avaibleSizesForField } from './config'
import history from '../../setup/history'
import {useFpState} from '../../state/fpState'

const menuItemsForSelectors = avaibleSizesForField.map(elem => <MenuItem key={elem} value={elem}>{elem}</MenuItem>)

const Settings = () => {
    const {state, setFpState} = useFpState()
    const [rowsInputValue, setRowsInputValue] = useState(state.settings.rows)
    const [columnsInputValue, setColumnsInputValue] = useState(state.settings.columns)

    return (
        <Grid container spacing={1} direction="column">
            <Grid item>
                <TextField
                    select
                    fullWidth
                    label='Rows'
                    title='Rows'
                    value={rowsInputValue}
                    onChange={({ target: { value } }) => setRowsInputValue(+value)}
                >{menuItemsForSelectors}</TextField>
            </Grid>

            <Grid item>
                <TextField
                    select
                    fullWidth
                    label='Columns'
                    title='Columns'
                    value={columnsInputValue}
                    onChange={({ target: { value } }) => setColumnsInputValue(+value)}
                >{menuItemsForSelectors}</TextField>
            </Grid>

            <Grid item>
                <Button
                    color='primary'
                    variant='contained'
                    onClick={() => {
                        const settings = {
                            rows: rowsInputValue,
                            columns: columnsInputValue,
                        }

                        setFpState(state => ({
                            ...state,
                            fieldHistory: [],
                            field: Field.createStart(settings),
                            settings,
                        }))()

                        history.push('/')
                    }}
                >Submit</Button>
            </Grid>
        </Grid>
    )
}

export default Settings
