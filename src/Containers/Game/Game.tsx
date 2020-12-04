import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import FieldView from '../../Components/Field/Field'
import { RootState } from '../../store/types'
import FieldHeader from '../../Components/FieldHeader/FieldHeader'
import initFieldThunk from './thunks/initField'
import { useSelector } from 'react-redux'
import Grid from '@material-ui/core/Grid'

const Game = () => {
  const dispatch = useDispatch()
  const field = useSelector((state: RootState) => state.field.current)
  const prevField = useSelector((state: RootState) => state.field.previous)
  const fieldSettings = useSelector((state: RootState) => state.settings)

  useEffect(() => {
    dispatch(initFieldThunk())
  }, [dispatch])

  return (
    <Grid container spacing={1} direction="column">
      <Grid item>
        <FieldHeader />
      </Grid>

      <Grid item>
        <FieldView
          field={field}
          prevField={prevField}
          settings={fieldSettings}
        />
      </Grid>
    </Grid>
  )
}

export default Game