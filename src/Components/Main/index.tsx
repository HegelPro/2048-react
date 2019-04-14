import React from "react";
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import { styles } from "./styles";
import Grid from "@material-ui/core/Grid";
import Field from '../../Containers/Field'

type ClassNames = WithStyles<typeof styles>;

interface Props extends ClassNames {}

const Main = ({ classes }: Props) => (
  <Grid container className={classes.root} justify='center'>
    <Grid item md={6} xs={12}>
      <Field columns={10} rows={10} />
    </Grid>
  </Grid>
)

export default withStyles(styles)(Main);