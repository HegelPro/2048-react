import Box from '@material-ui/core/Box'
import React from 'react'
import Header from '../../Components/Header/Header'

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
