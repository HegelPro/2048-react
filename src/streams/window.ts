import { fromEvent } from "rxjs";
import { map } from "rxjs/operators";
import { Vector } from "../models/vector";
import { DIRACTIONS } from "../models/vector/constants";

export const moveCells$ = fromEvent<KeyboardEvent>(window, 'keydown').pipe<Vector | undefined>(
  map((event: KeyboardEvent) => {
    if (event.key === 'w' || event.key === 'ц' || event.key === 'ArrowUp') {
      return DIRACTIONS.UP
    } else if (event.key === 'd' || event.key === 'в' || event.key === 'ArrowRight') {
      return DIRACTIONS.LEFT
    } else if (event.key === 's' || event.key === 'ы' || event.key === 'ArrowDown') {
      return DIRACTIONS.DOWN
    } else if (event.key === 'a' || event.key === 'ф' || event.key === 'ArrowLeft') {
      return DIRACTIONS.RIGHT
    }
  })
)