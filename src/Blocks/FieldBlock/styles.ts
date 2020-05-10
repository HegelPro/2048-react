import { Theme, makeStyles } from '@material-ui/core'
import {FieldBlockProps} from '.'
import { fieldSizes } from './config'

export const useStyles = makeStyles<Theme, FieldBlockProps>((theme) => {
  const borderWidth = 4
  return ({
    root: ({settings, width}) => {
      return {
        width: settings.columns > settings.rows
          ? fieldSizes[width]
          : fieldSizes[width] / settings.rows * settings.columns,
        height: settings.columns > settings.rows
          ? fieldSizes[width] / settings.columns * settings.rows
          : fieldSizes[width],
        position: 'relative',
        backgroundColor: theme.palette.primary.main,
        padding: borderWidth,
        boxSizing: 'content-box',
        borderRadius: theme.shape.borderRadius * 4,
      }
    },
    background: {
      position: 'relative',
      width: '100%',
      height: '100%',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      borderRadius: theme.shape.borderRadius * 4,
      overflow: 'hidden',
      background: theme.palette.background.default,
    },
  })
})
