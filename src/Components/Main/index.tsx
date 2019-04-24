import React from "react";
import {
  Route,
  Switch,
} from 'react-router-dom';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import { styles } from "./styles";
import Grid from "@material-ui/core/Grid";
import Field from '../../Containers/Field';
import Settings from "../../Containers/Settings";


type ClassNames = WithStyles<typeof styles>;

interface Props extends ClassNames {}

const Main = ({ classes }: Props) => (
  <Grid container className={classes.root} justify='center'>
    <Grid item md={4} sm={6} xs={12}>
      <Switch>
        <Route exact path='/'>
          <Field />
        </Route>
        <Route exact path='/settings'>
          <Settings />
        </Route>
      </Switch>
    </Grid>
  </Grid>
)

export default withStyles(styles)(Main);