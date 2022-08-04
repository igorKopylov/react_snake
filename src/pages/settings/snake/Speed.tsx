import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectGame } from '../../../redux/game/selectors';
import arrowCountLeft from '../../../assets/arrowCountLeft.svg';
import arrowCountRight from '../../../assets/arrowCountRight.svg';
import SaveButton from '../../../components/SaveButton';
import { useAppDispatch } from '../../../redux/store';
import { setSnakeSpeed, setFoodImage } from '../../../redux/game/slice';
import BackButton from '../../../components/BackButton';

const Wrapper = styled.div`
    width: 700px;
    margin: 100px auto;
`;

const Title = styled.h1`
    font-size: 50px;
    text-align: center;
`;

const Counter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 590px;
    margin: 30px auto;
    font-size: 40px;
`;

const Button = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 65px;
    height: 65px;
    background-color: #fff;
    border-radius: 50%;
    transition: .2s;
    cursor: pointer;

    &:hover {
        background-color: #878686;
    }

    img {
        width: 40px;
        height: 40px;
    }
`;

const Board = styled.div`
    width: 520px;
    margin: 0 auto;
    background-color: #fff;
`;

const Row = styled.div`
    display: flex;
`;

const SettingsCell = styled('div') <{ type: string, snakeColor: string }>`
    width: 35px;
    height: 35px;
    background-color: ${({ type, snakeColor }) => type === 'snake' ? snakeColor : '#fff'};
    border-radius: ${({ type }) => type === 'snake' && '10px'};
`;

const SnakeSpeed = () => {
    const [snake, setSnake] = useState([[1, 0], [1, 1], [1, 2]])
    const { snakeColor, snakeSpeed } = useSelector(selectGame)
    const [count, setCount] = useState(snakeSpeed)
    const dispatch = useAppDispatch()

    const checkAvailableCell = (position: number) => {
        if (position === 15) {
            return 0
        }
        return position
    }

    const moveSnake = () => {
        const newSnake = snake
        const head = [
            newSnake[newSnake.length - 1][0],
            checkAvailableCell(newSnake[newSnake.length - 1][1] + 1)
        ]
        newSnake.push(head)
        setSnake(newSnake.slice(1))
    }
    useEffect(() => {
        setTimeout(() => {
            moveSnake()
        }, count)
    }, [snake])

    return (
        <>
            <BackButton />
            <Wrapper>
                <Title>Snake Speed</Title>
                <Counter>
                    <Button onClick={() => setCount(count >= 180 ? count - 100 : count)}>
                        <img src={arrowCountLeft} style={{ marginRight: '-23px' }} alt='arrow left' />
                        <img src={arrowCountLeft} alt='arrow left' />
                    </Button>
                    <Button onClick={() => setCount(count > 70 ? count - 10 : count)}>
                        <img src={arrowCountLeft} alt='arrow left' />
                    </Button>
                    delay: {count} ms
                    <Button onClick={() => setCount(count < 800 ? count + 10 : count)}>
                        <img src={arrowCountRight} alt='arrow right' />
                    </Button>
                    <Button onClick={() => setCount(count <= 720 ? count + 100 : count)}>
                        <img src={arrowCountRight} alt='arrow right' />
                        <img src={arrowCountRight} style={{ marginLeft: '-23px' }} alt='arrow right' />
                    </Button>
                </Counter>
                <Board>
                    {
                        [...new Array(3)].map((_, indexRow: number) => (
                            <Row key={indexRow}>
                                {
                                    [...new Array(15)].map((_, indexCell: number) => {
                                        let type = snake.some(arr => arr[0] === indexRow && arr[1] === indexCell) ? 'snake' : ''
                                        return <SettingsCell key={indexCell} type={type} snakeColor={snakeColor} />
                                    })
                                }
                            </Row>
                        ))
                    }
                </Board>
            </Wrapper>
            <SaveButton onClickSave={() => dispatch(setSnakeSpeed(count))} />
        </>
    )
}

export default SnakeSpeed