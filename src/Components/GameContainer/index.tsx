import React from 'react'
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles'
import Box from '@material-ui/core/Box'
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
      <Box
        display='flex'
        flexDirection='column'
        alignItems='center'
      >
        {children}
      </Box>
    </Paper>
  )
}

export default withStyles(styles)(GameContainer)
