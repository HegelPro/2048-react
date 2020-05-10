import React from 'react'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'


interface IProps {
  children: React.ReactNode
}

const GameContainer = ({ children }: IProps) => (
  <Paper>
    <Box
      display='flex'
      flexDirection='column'
      alignItems='center'
      p={2}
    >
      {children}
    </Box>
  </Paper>
)

export default GameContainer
