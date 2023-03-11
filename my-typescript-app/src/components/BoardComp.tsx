import React from 'react'
import { chessType } from '../type/enum'
import ChessComp from './ChessComp'
import '../styles/BoardComp.css'
interface IProps {
    chesses: chessType[]
    click?: (i: number) => void
    isGameOver?: Boolean
}
export default function BoardComp({ chesses, click, isGameOver }: IProps) {
    let gameOver = isGameOver!
    let content = chesses.map((item, i) => {
        return <ChessComp
            status={item}
            click={() => {
                if (click && !gameOver) {
                    click(i)
                }

            }}
            key={i} />
    })
    return (
        <div className='board'>
            {content}
        </div>
    )
}
BoardComp.defaultProps = {
    isGameOver: false
}
