import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import BackButton from '../../../components/BackButton';
import Cell from '../../../components/Cell';
import SaveButton from '../../../components/SaveButton';
import { selectGame } from '../../../redux/game/selectors';
import { setSnakeColor } from '../../../redux/game/slice';
import { useAppDispatch } from '../../../redux/store';

const Wrapper = styled.div`
    width: 300px;
    margin: 100px auto;
`;

const SettingsSnake = styled.div`
    display: flex;
    width: 220px;
    margin: 40px auto;
`;

const SettingsCell = styled('div') < { color: string } > `
    width: 35px;
    height: 35px;
    background-color: ${props => props.color};
    border-radius: 10px;
`;

const Title = styled.h1`
    font-size: 50px;
    width: 100%;
    text-align: center;
`;

const Color = styled.div`
    display: flex;
    align-items: center;
    width: 150px;
    margin: 0 auto;
`;

const InputColor = styled.input`
    
`;

const ColorText = styled.p`
    font-size: 32px;
    margin-right: 20px;
`;

const SnakeColor = () => {
    const inputRef = useRef<HTMLInputElement>(null)
    const { snakeColor } = useSelector(selectGame)
    const [colorValue, setColorValue] = useState(snakeColor)
    const dispatch = useAppDispatch()

    return (
        <>
            <BackButton />
            <Wrapper>
                <Title>Snake color</Title>
                <SettingsSnake>
                    {
                        [...new Array(6)].map((_, i) => {
                            return <SettingsCell key={i} color={colorValue} />
                        })
                    }
                </SettingsSnake>
                <Color>
                    <ColorText>color:</ColorText>
                    <InputColor ref={inputRef} type='color' onChange={event => setColorValue(event.target.value)}
                        value={colorValue} />
                </Color>
            </Wrapper>
            <SaveButton onClickSave={() => dispatch(setSnakeColor(colorValue))} />
        </>
    )
}

export default SnakeColor