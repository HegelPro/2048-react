export default {}
// import React, { useState } from 'react'
// import {useDispatch, useSelector} from 'react-redux'
// import Button from '@material-ui/core/Button'
// import Grid from '@material-ui/core/Grid'
// import MenuItem from '@material-ui/core/MenuItem'
// import { RootState } from '../../store/types'
// import TextField from '@material-ui/core/TextField'
// import { avaibleSizesForField } from './config'
// import history from '../../setup/history'
// import initFieldThunk from '../Game/thunks/initField'
// import { setFieldSettingsAction } from './actions'

// const menuItemsForSelectors = avaibleSizesForField.map(elem => <MenuItem key={elem} value={elem}>{elem}</MenuItem>)

// const Settings = () => {
//   const dispatch = useDispatch()
//   const fieldSettings = useSelector((state: RootState) => state.settings)
//   const [rowsInputValue, setRowsInputValue] = useState(fieldSettings.rows)
//   const [columnsInputValue, setColumnsInputValue] = useState(fieldSettings.columns)

//   return (
//     <Grid container spacing={1} direction="column">
//       <Grid item>
//         <TextField
//           select
//           fullWidth
//           label='Rows'
//           title='Rows'
//           value={rowsInputValue}
//           onChange={({ target: { value } }) => setRowsInputValue(+value)}
//         >{menuItemsForSelectors}</TextField>
//       </Grid>

//       <Grid item>
//         <TextField
//           select
//           fullWidth
//           label='Columns'
//           title='Columns'
//           value={columnsInputValue}
//           onChange={({ target: { value } }) => setColumnsInputValue(+value)}
//         >{menuItemsForSelectors}</TextField>
//       </Grid>

//       <Grid item>
//         <Button
//           color='primary'
//           variant='contained'
//           onClick={() => {
//             dispatch(setFieldSettingsAction({
//               rows: rowsInputValue,
//               columns: columnsInputValue,
//             }))
//             dispatch(initFieldThunk(() => {
//               history.push('/')
//             }))
//           }}
//         >Submit</Button>
//       </Grid>
//     </Grid>
//   )
// }

// export default Settings
