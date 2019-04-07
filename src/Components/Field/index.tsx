import React, { useEffect } from "react";
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import { styles } from "./styles";
import { FieldRecord } from "../../models/field";
import Cell from "../../Components/Cell";


type ClassNames = WithStyles<typeof styles>;

interface Props extends ClassNames {
  field: FieldRecord
  prevField?: FieldRecord
}

const Field = ({
  classes,
  field,
  prevField,
}: Props) => {
  useEffect(() => {
    field.cells.forEach(cell => {
      if (cell) {
        const cellElem = document.getElementById(`cell_${cell.id}`)
        if(cellElem) {
          cellElem.style.top = '0'
          cellElem.style.left = '0'
        }
      }
    })
  })
  return (
    <div className={classes.root}>
      {field.cells.map(cell => {
        if(prevField) {
          const currentPosition = field.getCellPosition(cell)
          const prevPosition = prevField.getCellPosition(cell)
          if(prevPosition && currentPosition) {
            console.log(`prevPosition: (${prevPosition.x}, ${prevPosition.y})`)
            console.log(`currentPosition: (${currentPosition.x}, ${currentPosition.y})`)
            const dx = (prevPosition.x - currentPosition.x)
            const dy = (prevPosition.y - currentPosition.y)
            return (
              <div
                className={classes.spaceForCell}
                key={cell.id}
                style={{ width: `${100 / field.columns}%` }}
              >
                <div
                  id={`cell_${cell.id}`}
                  className={classes.cellSize}
                  style={{
                    top: `${100 * dy}%`,
                    left: `${100 * dx}%`,
                  }}
                >
                  <Cell cell={cell} />
                </div>
              </div>
            )
          }
        }
        return (
          <div
            className={classes.spaceForCell}
            key={cell.id}
            style={{ width: `${100 / field.columns}%` }}
          >
            <div
              id={`cell_${cell.id}`}
              className={classes.cellSize}
            >
              <Cell cell={cell}/>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default withStyles(styles)(Field);