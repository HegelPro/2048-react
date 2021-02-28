import FieldHeader from '../../Components/FieldHeader/FieldHeader'
import FieldView from '../../Components/Field/Field'
import Grid from '@material-ui/core/Grid'
import React from 'react'
import { RootState } from '../../store/types'
import { useSelector } from 'react-redux'

const Game = () => {
  const field = useSelector((state: RootState) => state.field.current)
  const prevField = useSelector((state: RootState) => state.field.previous)
  const fieldSettings = useSelector((state: RootState) => state.settings)

  return (
    <Grid container spacing={1} direction="column" alignItems="center">
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
