import React from 'react';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
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
    fff
    <button onClick={onClickBack}>PrevField</button>
    <button onClick={onClickRestart}>Restart</button>
  </div>
)

export default withStyles(styles)(Field);