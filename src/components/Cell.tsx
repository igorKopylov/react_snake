import React from 'react';
import { useSelector } from 'react-redux';
import styled, { keyframes } from 'styled-components';
import apple from '../assets/food/apple.svg';
import banana from '../assets/food/banana.svg'
import { selectGame } from '../redux/game/selectors';
import { foodList } from '../pages/settings/Food';

const Block = styled('div') <{ type: string, snakeColor?: string }>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    background-color: ${props => props.type === 'snake' && props.snakeColor};
    border-radius: 10px;
`;

const changeSize = keyframes`
    0% {
        width: 42px;
        height: 42px;
    }
    50% {
        width: 52px;
        height: 52px;
    }
`;

const Img = styled.img`
    animation: ${changeSize} 1s linear infinite alternate;
`;

type CellProps = {
    type: string;
}

const Cell: React.FC<CellProps> = ({ type }) => {
    const { snakeColor, foodId } = useSelector(selectGame)

    return (
        <>
            {
                type !== 'food' && <Block type={type} snakeColor={snakeColor} />
            }
            {
                type === 'food' && <Block type={type}><Img src={foodList[foodId].imageUrl} width={35} height={35} alt='apple' /></Block>
            }
        </>
    )
}

export default Cell