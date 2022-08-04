import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import arrowKeys from '../../assets/arrowKeys.jpg';
import WASD from '../../assets/WASD.jpg';
import BackButton from '../../components/BackButton';
import SaveButton from '../../components/SaveButton';
import { selectGame } from '../../redux/game/selectors';
import { setControl } from '../../redux/game/slice';
import { useAppDispatch } from '../../redux/store';

const Wrapper = styled.div`
    width: 700px;
    margin: 50px auto;
    margin-bottom: 100px;
`;

const Title = styled.h1`
    font-size: 60px;
    text-align: center;
    margin-bottom: 50px;
`;

const Images = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const ArrowsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: #fff;
    cursor: pointer;
`;

const Selected = styled('div') <{ isArrows: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 300px;
    border: ${props => props.isArrows ? '5px solid #fff' : ''};
`;

const Arrows = styled.img`
    width: 160px;
    height: 110px; 
`;

const Wasd = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    cursor: pointer;
`;

const Control = () => {
    const { control } = useSelector(selectGame)
    const [isArrows, setIsArrows] = useState(control[0] === 'w' ? false : true)
    const dispatch = useAppDispatch()

    const onClickSave = () => {
        if (isArrows) {
            dispatch(setControl(['ArrowUp', 'ArrowLeft', 'ArrowDown', 'ArrowRight']))
        } else {
            dispatch(setControl(['w', 'a', 's', 'd']))
        }
    }

    return (
        <>
            <BackButton />
            <Wrapper>
                <Title>Control</Title>
                <Images>
                    <Selected isArrows={!isArrows}>
                        <Wasd onClick={() => setIsArrows(false)} src={WASD} alt='wasd keys' />
                    </Selected>
                    <Selected isArrows={isArrows}>
                        <ArrowsWrapper onClick={() => setIsArrows(true)}>
                            <Arrows src={arrowKeys} alt='arrow keys' />
                        </ArrowsWrapper>
                    </Selected>
                </Images>
            </Wrapper>
            <SaveButton onClickSave={onClickSave} />
        </>
    )
}

export default Control