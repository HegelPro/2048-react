import React from 'react';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import { styles } from './styles';
import { FieldRecord } from '../../models/field';
import { Link } from 'react-router-dom';


type ClassNames = WithStyles<typeof styles>;

interface Props extends ClassNames {
  field: FieldRecord
  onClickBack: () => void
  onClickRestart: () => void
}

const Field = ({
  classes,
  field,
  onClickBack,
  onClickRestart,
}: Props) => (
  <div>
    <p>{field.cells.reduce((result, cell) => cell.value !== 0
      ? result + Math.pow(2, cell.value)
      : result, 0)}</p>
    <Button
      color='primary'
      variant='contained'
      size='small'
      onClick={onClickBack}
    >PrevField</Button>
    <Button
      color='primary'
      variant='contained'
      size='small'
      onClick={onClickRestart}
    >Restart</Button>
    <Link to='/settings'>
      <Button
        color='primary'
        variant='contained'
        size='small'
      >Settings</Button>
    </Link>
    
  </div>
)

export default withStyles(styles)(Field);