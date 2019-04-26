import React from 'react'
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles'
import { styles } from './styles'

type ClassNames = WithStyles<typeof styles>

interface IProps extends ClassNames {
  children: React.ReactNode
}

const Field = ({
  classes,
  children,
}: IProps) => {
  return (
    <div className={classes.root}>
      {children}
      <div className={classes.border} />
    </div>
  )
}

export default withStyles(styles)(Field)
