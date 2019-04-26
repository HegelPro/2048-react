import React from "react";
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import { styles } from "./styles";
import classnames from 'classnames'

type ClassNames = WithStyles<typeof styles>;

interface Props extends ClassNames {
  className: string
}

const Footer = ({
  className,
  classes,
}: Props) => (
  <div className={classnames(classes.root, className)}>
    &#9400; Димонстрационный проект Палкина Льва.
  </div>
)

export default withStyles(styles)(Footer);