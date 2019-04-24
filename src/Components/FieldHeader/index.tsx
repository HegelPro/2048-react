import React from 'react';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import ButtonBase from '@material-ui/core/ButtonBase';
import { styles } from './styles';
import { FieldRecord } from '../../models/field';


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
    <ButtonBase onClick={onClickBack}>PrevField</ButtonBase>
    <ButtonBase onClick={onClickRestart}>Restart</ButtonBase>
  </div>
)

export default withStyles(styles)(Field);