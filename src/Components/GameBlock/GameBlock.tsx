import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import React from 'react'

interface GameBlockProps {
  children: React.ReactNode
}

const GameBlock = ({ children }: GameBlockProps) => (
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

export default GameBlock
