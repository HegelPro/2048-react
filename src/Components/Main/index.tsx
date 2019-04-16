import React from "react";
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import { styles } from "./styles";
import Grid from "@material-ui/core/Grid";
import Field from '../../Containers/Field'
import FieldContainer from "../FieldContainer";

type ClassNames = WithStyles<typeof styles>;

interface Props extends ClassNames {}

const Main = ({ classes }: Props) => (
  <Grid container className={classes.root} justify='center'>
    <Grid item md={5} xs={12}>
      <FieldContainer>
        <Field columns={10} rows={10} />
      </FieldContainer>
    </Grid>
  </Grid>
)

export default withStyles(styles)(Main);