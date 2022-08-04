import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import arrowCountLeft from '../../assets/arrowCountLeft.svg';
import arrowCountRight from '../../assets/arrowCountRight.svg';
import BackButton from '../../components/BackButton';
import SaveButton from '../../components/SaveButton';
import { selectGame } from '../../redux/game/selectors';
import { setBoardSize } from '../../redux/game/slice';
import { useAppDispatch } from '../../redux/store';

const Wrapper = styled.div`
    margin: 120px auto;
    margin-bottom: 180px;
`;

const Title = styled.h1`
    width: 250px;
    font-size: 50px;
    text-align: center;
    margin: 0 auto;
`;

const Counter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 250px;
    font-size: 50px;
    color: #fff;
    margin: 30px auto;
`;

const Button = styled.button`
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

const BoardSize = () => {
    const { boardSize } = useSelector(selectGame)
    const [count, setCount] = useState(boardSize)
    const dispatch = useAppDispatch()

    return (
        <>
            <BackButton />
            <Wrapper>
                <Title>Board size</Title>
                <Counter>
                    <Button onClick={() => setCount(count > 7 ? count - 1 : count)}>
                        <img src={arrowCountLeft} alt='arrow left' />
                    </Button>
                    {count}
                    <Button onClick={() => setCount(count < 30 ? count + 1 : count)}>
                        <img src={arrowCountRight} alt='arrow right' />
                    </Button>
                </Counter>
            </Wrapper>
            <SaveButton onClickSave={() => dispatch(setBoardSize(count >= 30 ? count + 1 : count))} />
        </>
    )
}

export default BoardSize
