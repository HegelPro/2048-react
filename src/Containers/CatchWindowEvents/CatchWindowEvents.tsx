import * as IO from 'fp-ts/IO'
import React, { useEffect } from 'react'
import { Diraction } from '../../models/diraction'

interface CatchWindowEventsProps {
    onMoveInDiraction: (dir: Diraction) => IO.IO<void>;
    onBack: IO.IO<void>;
    children: React.ReactNode;
}

const CatchWindowEvents = ({children, onMoveInDiraction, onBack}: CatchWindowEventsProps) => {
    useEffect(() => {
        const onKeyDown = (event: KeyboardEvent) => {
            if (['w', 'ц', 'ArrowUp'].some(key => key === event.key)) {
                onMoveInDiraction('UP')()
            }
            
            if (['d', 'в', 'ArrowRight'].some(key => key === event.key)) {
                onMoveInDiraction('RIGHT')()
            }
            
            if (['s', 'ы', 'ArrowDown'].some(key => key === event.key)) {
                onMoveInDiraction('DOWN')()
            }
            
            if (['a', 'ф', 'ArrowLeft'].some(key => key === event.key)) {
                onMoveInDiraction('LEFT')()
            }


            if (['Backspace'].some(key => key === event.key)) {
                onBack()
            }
        }

        window.addEventListener('keydown', onKeyDown)
        
        return () => window.removeEventListener('keydown', onKeyDown)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return <>{children}</>
}


export default CatchWindowEvents
