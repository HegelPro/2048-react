import React from 'react'
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles'
import { styles } from './styles'
import classnames from 'classnames'
import { Typography } from '@material-ui/core'

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
