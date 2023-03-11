import React, { useEffect, useState } from 'react'
import { chessType, gameStatus } from '../type/enum'
import BoardComp from './BoardComp'
import GameStatusComp from './GameStatusComp'
import '../styles/GameComp.css'
export default function GameComp() {

    const [chesses, setChesses] = useState<chessType[]>([])
    const [game, setGame] = useState<gameStatus>(gameStatus.gaming)
    const [nextChess,setNextChess] = useState<chessType.red|chessType.black>(chessType.red)
    useEffect(() => {
        init()
    }, [])
    //初始化棋盘
    function init() {
        const arr: chessType[] = []
        for (let i = 0; i < 9; i++) {
            arr.push(chessType.none)
        }
        setChesses(arr)
        setNextChess(chessType.red)
        setGame(gameStatus.gaming)
    }
    //处理棋子的点击事件
    function handleClick(i:number){
        let newChesses = [...chesses]
        newChesses[i] = nextChess
        
        if(nextChess===chessType.red){
            setNextChess(chessType.black)
            setGame(getGameStatus(newChesses,i))
        }
        else{
            setNextChess(chessType.red)
            setGame(getGameStatus(newChesses,i))
        }
        setChesses(newChesses)
    }

    function getGameStatus(chesses:chessType[],index:number):gameStatus{
        //其中一方已经获胜
        const horMin = Math.floor(index/3)*3
        const verMin = index%3
        if((chesses[horMin]===chesses[horMin+1]&&chesses[horMin]===chesses[horMin+2])
        ||(chesses[verMin]===chesses[verMin+3]&&chesses[verMin]===chesses[verMin+6])
        ||(chesses[0]===chesses[4]&&chesses[0]===chesses[8]&&chesses[0]!==chessType.none)
        ||(chesses[2]===chesses[4]&&chesses[2]===chesses[6]&&chesses[2]!==chessType.none)
        ){
            if(chesses[index]===chessType.black){
                return gameStatus.blackWin
            }else{
                return gameStatus.redWin
            }

        }
        //平局
        if(!chesses.includes(chessType.none)){
            return gameStatus.draw
        }
        //游戏继续进行
        return gameStatus.gaming
    }
    return (
        <div className='game'>
            <GameStatusComp status={game} next={nextChess} ></GameStatusComp>
            <BoardComp 
            chesses={chesses} 
            isGameOver={game !== gameStatus.gaming}
            click={handleClick}
            ></BoardComp>
            <span onClick={init} className='button'>重新开始</span>
        </div>
    )
}
