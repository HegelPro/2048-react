import React from 'react'
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles'
import Paper from '@material-ui/core/Paper'

import { styles } from './styles'

type ClassNames = WithStyles<typeof styles>

interface IProps extends ClassNames {
  children: React.ReactNode
}

const GameContainer = ({
  classes,
  children,
}: IProps) => {
  return (
    <Paper className={classes.root}>
      {children}
    </Paper>
  )
}

export default withStyles(styles)(GameContainer)
