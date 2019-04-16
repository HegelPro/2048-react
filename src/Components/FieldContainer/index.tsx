import React from 'react';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import { styles } from './styles';


type ClassNames = WithStyles<typeof styles>;

interface Props extends ClassNames {
  children: React.ReactNode
}

const Field = ({
  classes,
  children,
}: Props) => {
  return (
    <div className={classes.root}>
      {children}
    </div>
  )
}

export default withStyles(styles)(Field);