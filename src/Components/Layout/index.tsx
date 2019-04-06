import React from "react";
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';
import { styles } from "./styles";


type ClassNames = WithStyles<typeof styles>;

interface Props extends ClassNames {}

const Layout = ({ classes }: Props) => (
  <div className={classes.root}>
    <Header />
    <Main />
    <Footer />
  </div>
)

export default withStyles(styles)(Layout);