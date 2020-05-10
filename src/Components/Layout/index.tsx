import React from 'react'

import Header from '../Header'

interface LayoutProps {
  children: JSX.Element
}

const Layout = ({children}: LayoutProps) => (
  <>
    <Header />
    {children}
  </>
)

export default Layout
