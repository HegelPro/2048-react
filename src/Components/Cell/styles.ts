import { Theme } from '@material-ui/core'
import makeStyles from '@material-ui/core/styles/makeStyles'
import {CellProps} from '.'
import selectCellColor from './utils/selectCellColor'

export const useStyles = makeStyles<Theme, CellProps>((theme) => ({
    root: ({cell}) => ({
      backgroundColor: selectCellColor(cell.value),
      display: 'flex',
      position: 'absolute',
      alignItems: 'center',
      height: '100%',
      width: '100%',
      justifyContent: 'center',
      borderRadius: theme.shape.borderRadius * 4,
    }),
    side: ({cell}) => ({
      backgroundColor: selectCellColor(cell.value),
      display: 'block',
      position: 'absolute',
      top: theme.spacing(0.5),
      width: '100%',
      height: '100%',
      background: `radial-gradient(ellipse at right, ${
        theme.palette.common.black
      }, transparent)`,
      borderRadius: theme.shape.borderRadius * 4,
    }),
    circle: {
      position: 'absolute',
      borderRadius: '50%',
      width: '80%',
      height: '80%',
      background: `radial-gradient(ellipse at right, ${
        theme.palette.common.black
      }, transparent)`,
      opacity: 0.1,
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
    value: ({cell}) => ({
      color: theme.palette.getContrastText(selectCellColor(cell.value))
    }),
  })
)
