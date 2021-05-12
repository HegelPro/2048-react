import React, { useEffect, useRef } from 'react'
import withWidth, { WithWidth } from '@material-ui/core/withWidth'
import { FieldSettingsRecord } from '../../models/settings/schema'
import { useStyles } from './styles'

export interface FieldBlockProps extends
WithWidth {
  children: React.ReactNode
  settings: FieldSettingsRecord
}

const FieldBlock = (props: FieldBlockProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const classes = useStyles(props)
  const { children } = props

  useEffect(() => {
    if (ref.current) {
      ref.current.onselectstart = () => false
    }
  }, [])

  return (
    <div
      ref={ref}
      className={classes.root}
    >
      <div className={classes.background}>
        {children}
      </div>
    </div>
  )
}

export default withWidth()(FieldBlock)
