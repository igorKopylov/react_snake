import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import tick from '../../assets/tick.svg';
import BackButton from '../../components/BackButton';
import SaveButton from '../../components/SaveButton';
import { selectGame } from '../../redux/game/selectors';
import { setMod } from '../../redux/game/slice';
import { useAppDispatch } from '../../redux/store';

const Wrapper = styled.div`
    margin: 100px auto;
    margin-top: 60px;
`;

const Title = styled.h1`
    font-size: 50px;
    text-align: center;
    margin-bottom: 40px;
`;

const Ul = styled.ul`
    width: 300px;
    margin: 0 auto;

    li {
        font-size: 30px;
        transition: .2s;
        cursor: pointer;
    }

    li:not(:last-child) {
        margin-bottom: 35px;
    }
`;

const Li = styled('li')`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 30px;
    transition: .2s;
    height: 50px;
    cursor: pointer;
`;

const Mods = () => {
    const { mod } = useSelector(selectGame)
    const modsList = ['Without walls', 'Standart', 'Immortal']
    const [modId, setModId] = useState(modsList.indexOf(mod))
    const dispatch = useAppDispatch()

    return (
        <>
            <BackButton />
            <Wrapper>
                <Title>Mods</Title>
                <Ul>
                    {
                        modsList.map((mod, i) => (
                            <Li key={i} onClick={() => setModId(i)}>{mod}
                                {modId === i && <img src={tick} width={50} height={50} alt='tick' />}</Li>
                        ))
                    }
                </Ul>
            </Wrapper>
            <SaveButton onClickSave={() => dispatch(setMod(modsList[modId]))} />
        </>
    )
}

export default Mods