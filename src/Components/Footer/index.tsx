import React from 'react'
import classnames from 'classnames'
import Typography from '@material-ui/core/Typography'
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles'

import { styles } from './styles'

type ClassNames = WithStyles<typeof styles>

interface IProps extends ClassNames {
  className: string
}

const Footer = ({
  className,
  classes,
}: IProps) => (
  <div className={classnames(classes.root, className)}>
    <Typography>&#9400; Димонстрационный проект Палкина Льва.</Typography>
  </div>
)

export default withStyles(styles)(Footer)
