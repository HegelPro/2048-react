import React from "react";
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import { styles } from "./styles";


type ClassNames = WithStyles<typeof styles>;

interface Props extends ClassNames {}

const Footer = ({ classes }: Props) => (
  <div className={classes.root}>
    sdff
  </div>
)

export default withStyles(styles)(Footer);