import React from 'react'
import FieldView from '../../Components/Field/Field'
import { RootState } from '../../store/types'
import FieldHeader from '../../Components/FieldHeader/FieldHeader'
import { useSelector } from 'react-redux'
import Grid from '@material-ui/core/Grid'

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
