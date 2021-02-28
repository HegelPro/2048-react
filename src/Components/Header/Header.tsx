import * as strings from './strings'
import AppBar from '@material-ui/core/AppBar'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import React from 'react'
import Typography from '@material-ui/core/Typography'
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles({
  title: {
    fontFamily: '\'ZCOOL KuaiLe\', cursive',
  },
})


const Header = () => {
  const classes = useStyles()

  return (
    <AppBar
      color='primary'
      position='static'
    >
      <Box p={1}>
        <Grid container spacing={1} justify="space-between" alignItems="center">
          <Grid item>
            <Typography
              className={classes.title}
              variant='h3'
              color='inherit'
            >{strings.title}</Typography>
          </Grid>
          <Grid item>
            <Typography
              variant='caption'
              color='inherit'
            >{strings.copyright}</Typography>
          </Grid>
        </Grid>
      </Box>
    </AppBar>
  )
}

export default Header
