import React from 'react'
import { chessType } from '../type/enum'
import '../styles/ChessComp.css'
interface Chess {
    status: chessType,
    click?: () => void
}

export default function ChessComp({ status, click }: Chess) {
    let color: string;
    if (status === chessType.red) {
        color = 'red'
    } else if (status === chessType.black) {
        color = 'black'
    } else {
        color = ''
    }
    return (
        <div className={`chess`} onClick={() => {
            if (click && status === chessType.none) {
                click()
            }

        }}>
            <div className={`chessItem ${color}`}></div>
        </div>
    )
}
