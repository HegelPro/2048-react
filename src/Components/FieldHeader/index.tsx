import React from 'react'
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles'
import Fab from '@material-ui/core/Fab'
import { styles } from './styles'
import { FieldRecord } from '../../models/field'
import history from '../../setup/history'
import Cached from '@material-ui/icons/Cached'
import Settings from '@material-ui/icons/Settings'
import Reply from '@material-ui/icons/Reply'

type ClassNames = WithStyles<typeof styles>

interface IProps extends ClassNames {
  field: FieldRecord
  prevField: FieldRecord
  onClickBack: () => void
  onClickRestart: () => void
}

const Field = ({
  field,
  prevField,
  onClickBack,
  onClickRestart,
}: IProps) => (
  <div>
    <p>
      {field.cells.reduce((result, cell) => cell.value !== 0
        ? result + Math.pow(2, cell.value)
        : result, 0)}
    </p>
    <Fab
      color='primary'
      aria-label='Previous Field'
      onClick={onClickBack}
      disabled={field.cells.equals(prevField.cells)}
    >
      <Reply />
    </Fab>
    <Fab
      color='primary'
      aria-label='Restart'
      onClick={onClickRestart}
    >
      <Cached />
    </Fab>
    <Fab
      aria-label='Settings'
      color='primary'
      onClick={() => history.push('/settings')}
    >
      <Settings />
    </Fab>
  </div>
)

export default withStyles(styles)(Field)
