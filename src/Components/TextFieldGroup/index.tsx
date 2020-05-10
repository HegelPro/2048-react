import React from 'react'

import { useStyles } from './styles'

interface IProps {
  children: React.ReactNode
}

const Records = ({ children }: IProps) => {
  const classes = useStyles()
  return (
    <form className={classes.root}>
      {children}
    </form>
  )
}

export default Records
