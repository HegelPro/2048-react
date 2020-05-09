import React from 'react'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'

import { useStyles } from './styles'


interface IProps {
  children: React.ReactNode
}

const GameContainer = ({ children }: IProps) => {
  const classes = useStyles()
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

export default GameContainer
