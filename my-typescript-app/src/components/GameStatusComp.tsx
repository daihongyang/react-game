import React from 'react'
import { chessType, gameStatus } from '../type/enum'
import '../styles/GameStatusComp.css'
interface IProps {
    status: gameStatus
    next: chessType
}
export default function GameStatusComp(props: IProps) {
    let text:string
    let color:string
    if(props.status===gameStatus.blackWin){
        color = 'blackWin'
        text = '黑方胜利'
    }else if(props.status===gameStatus.draw){
        color = 'draw'
        text = '旗鼓相当！'
    }else if(props.status===gameStatus.redWin){
        color = 'redWin'
        text = '红方胜利'
    }
    else{
        text = props.next===chessType.black?'黑方落子':'红方落子'
        color = props.next===chessType.black?'blackWin':'redWin'
    }

    return (
        <h2 className={`text ${color}`}>
            {text}
        </h2>
    )
}
