import React from 'react'
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

import { useStyles } from './styles'
import * as strings from './strings'


const Header = () => {
  const classes = useStyles()
  return (
    <AppBar
      color='primary'
      position='static'
    >
      <Box
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        p={1}
      >
        <Box mr={1}>
          <Typography
            gutterBottom
            className={classes.title}
            variant='h3'
            color='inherit'
          >{strings.title}</Typography>
        </Box>
        <Box>
          <Typography
            gutterBottom
            variant='caption'
            color='inherit'
          >{strings.copyright}</Typography>
        </Box>
      </Box>
    </AppBar>
  )
}

export default Header
