import Box from '@material-ui/core/Box'
import Header from '../../Components/Header/Header'
import React from 'react'

interface LayoutProps {
  children: JSX.Element
}

const Layout = ({children}: LayoutProps) => (
  <>
    <Header />
    <Box
      display='flex'
      justifyContent='center'
      p={4}
    >
      {children}
    </Box>
  </>
)

export default Layout
