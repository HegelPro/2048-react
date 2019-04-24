import React from 'react';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import { styles } from './styles';
import { FieldRecord } from '../../models/field';


type ClassNames = WithStyles<typeof styles>;

interface Props extends ClassNames {
  children: React.ReactNode
  field: FieldRecord,
}

const Field = ({
  classes,
  children,
  field,
}: Props) => {
  return (
    <div className={classes.root}>
      {children}
      <div className={classes.border} />
    </div>
  )
}

export default withStyles(styles)(Field);