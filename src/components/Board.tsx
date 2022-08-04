import React, { useCallback, useEffect, useRef, useState } from 'react';
import Cell from './Cell';
import styled from 'styled-components';
import Pause from './modals/Pause';
import Lost from './modals/Lost'
import { StringifyOptions } from 'querystring';
import { useSelector } from 'react-redux';
import { selectGame } from '../redux/game/selectors';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 700px;
    margin: 70px auto;
    margin-bottom: 20px;
`;

const Content = styled.div`
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #000;
    background-color: #fff;
`;

const Row = styled.div`
    display: flex;
`;

const Score = styled.h1`
    margin-bottom: 20px;
    font-size: 40px;
    font-family: 'sans-serif';
`;

const Timer = styled.div`
    position: absolute;
    font-size: 120px;
    font-weight: 600;
    color: #000;
`;

const Tip = styled.p`
    font-size: 40px;
    margin-top: 20px;
`;

const Board = () => {
    const { boardSize, snakeSpeed, mod, control } = useSelector(selectGame)
    const cellsValue = Array(boardSize).fill(Array(boardSize).fill(0))
    const [snake, setSnake] = useState([[0, Math.floor(boardSize / 2)], [1, Math.floor(boardSize / 2)], [2, Math.floor(boardSize / 2)]])
    const [keyValue, setKeyValue] = useState('ArrowDown')
    const [isPause, setIsPause] = useState(false)
    const [isLost, setIsLost] = useState(false)
    const [food, setFood] = useState([Math.floor(Math.random() * (boardSize - 1)), Math.floor(Math.random() * (boardSize - 1))])
    const [timer, setTimer] = useState(3)
    const isFirstRender = useRef(true)

    useEffect(() => {
        setTimeout(() => {
            if (timer !== -1) {
                setTimer(timer - 1)
            }
        }, 800)
    }, [timer]);
    const generatedFood = () => {
        let newFood: number[] = []
        do {
            newFood = [Math.round(Math.random() * (boardSize - 1)), Math.round(Math.random() * (boardSize - 1))]
        } while (snake.some(arr => arr[0] === newFood[0] && arr[1] === newFood[1]))

        setFood(newFood)
    }

    useEffect(() => {
        const onClickKey = (event: KeyboardEvent) => {
            if (control[0] === 'w' && control.includes(event.key.toLowerCase())) {
                setKeyValue(event.key.toLowerCase())
            }
            if (control[0] === 'ArrowUp' && control.includes(event.key)) {
                setKeyValue(event.key)
            }
            if (event.code === 'Space' && !isLost) {
                setIsPause(!isPause)
            }
        }

        document.addEventListener('keydown', onClickKey)
        return () => document.removeEventListener('keydown', onClickKey)
    }, [control, isPause])

    const checkAvailableCell = (position: number) => {
        if (position === boardSize && (mod === 'Without walls' || mod === 'Immortal')) return 0
        if (position === boardSize && mod === 'Standart') setIsLost(true)
        if (position < 0 && mod === 'Standart') setIsLost(true)
        if (position < 0 && (mod === 'Without walls' || mod === 'Immortal')) {
            return boardSize
        }
        return position
    }

    useEffect(() => {
        const moveSnake = () => {
            const newSnake = snake
            let move: number[] = []

            if (keyValue === 'w' || keyValue === 'ArrowUp') {
                move = [-1, 0]
            }
            if (keyValue === 'a' || keyValue === 'ArrowLeft') {
                move = [0, -1]
            }
            if (keyValue === 's' || keyValue === 'ArrowDown') {
                move = [1, 0]
            }
            if (keyValue === 'd' || keyValue === 'ArrowRight') {
                move = [0, 1]
            }
            const head = [
                checkAvailableCell(newSnake[newSnake.length - 1][0] + move[0]),
                checkAvailableCell(newSnake[newSnake.length - 1][1] + move[1])
            ]
            if (food[0] === head[0] && food[1] === head[1]) {
                newSnake.unshift(head)
                generatedFood()
            }
            const snakeWithoutLastChild = newSnake.slice(0, -1)
            const isEqualSnakeElems = snakeWithoutLastChild.some((arr) => arr[0] === newSnake[newSnake.length - 1][0] && arr[1] === newSnake[newSnake.length - 1][1])
            if (isEqualSnakeElems && mod !== 'Immortal') {
                setIsLost(true)
            }
            if (newSnake[newSnake.length - 2][0] === newSnake[newSnake.length - 1][0] && newSnake[newSnake.length - 2][1] === newSnake[newSnake.length - 1][1]) {
                setKeyValue('s')
            }
            newSnake.push(head)
            newSnake.shift()
            setSnake([...newSnake])
        }

        setTimeout(() => {
            if (timer === -1 && !isPause && !isLost) {
                moveSnake()
            }
        }, snakeSpeed)
        isFirstRender.current = false
    }, [timer === -1 && !isPause && !isLost ? snake : null])

    const onClickRetry = () => {
        setIsLost(false)
        setSnake([[0, Math.round(boardSize / 2)], [1, Math.round(boardSize / 2)], [2, Math.round(boardSize / 2)]])
        setFood([Math.round(Math.random() * (boardSize - 1)), Math.round(Math.random() * (boardSize - 1))])
        setKeyValue('s')
        setTimer(3)
    }

    return (
        <Wrapper>
            <Score>score: {snake.length}</Score>
            <Content>
                <Timer>
                    {timer > 0 && timer}
                    {timer === 0 && 'Go!'}
                </Timer>
                {
                    cellsValue.map((row: number[], indexRow: number) => (
                        <Row key={indexRow}>
                            {
                                row.map((_: number, indexCell: number) => {
                                    let type
                                    if (snake.some(arr => arr[0] === indexRow && arr[1] === indexCell)) {
                                        type = 'snake'
                                    }
                                    if (type !== 'snake') {
                                        type = (food[0] === indexRow && food[1] === indexCell) ? 'food' : '';
                                    }
                                    return <Cell key={indexCell} type={type} />
                                })
                            }
                        </Row>
                    ))
                }
                {
                    isPause && !isLost && <Pause onClickContinue={() => setIsPause(false)} />
                }
                {
                    isLost && <Lost onClickRetry={onClickRetry} />
                }
            </Content>
            <Tip>Press the spacebar to pause</Tip>
        </Wrapper>
    )
}

export default Board
