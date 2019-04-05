import React from "react";
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import { styles } from "./styles";
import { Grid } from "@material-ui/core";


type ClassNames = WithStyles<typeof styles>;

interface Props extends ClassNames {}

const Main = ({ classes }: Props) => (
  <Grid className={classes.root}>
    Row
    sdf
  </Grid>
)

export default withStyles(styles)(Main);