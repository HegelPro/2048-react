import React from 'react'
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles'
import Header from '../Header'
import Main from '../Main'
import Footer from '../Footer'
import { styles } from './styles'

type ClassNames = WithStyles<typeof styles>

interface IProps extends ClassNames {}

const Layout = ({ classes }: IProps) => (
  <div className={classes.root}>
    <div className={classes.content}>
      <Header />
      <Main />
    </div>
    <Footer className={classes.footer} />
  </div>
)

export default withStyles(styles)(Layout)
