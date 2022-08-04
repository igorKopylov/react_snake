import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import pause from '../../assets/pause.svg'

const Wrapper = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #00000096;
`;

const Content = styled.div`
    position: relative;
    width: 700px;
    height: 220px;
    border-radius: 15px;
    background-color: #fff;
`;

const Title = styled.div`
    display: flex;
    align-items: center;
    width: 280px;
    margin: 35px auto;
`;

const TitleText = styled.h1`
    font-size: 70px;
    font-weight: 500;
    margin-right: 15px;
    color: #000;
`;

const ContentButtons = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-between;
    bottom: 0;
    width: 100%; color: #000;
`;

const ContinueButton = styled.button`
    display: block;
    width: 350px;
    height: 50px;
    background-color: #14f304;
    border: none;
    border-bottom-left-radius: 15px;
    font-size: 20px;
    font-weight: 600;
    color: #000;
    transition: .2s;
    cursor: pointer;

    &:hover {
        background-color: #0caa07;
    }
`;

const ExitButton = styled.button`
    display: block;
    width: 350px;
    height: 50px;
    background-color: #f86161;
    border: none;
    border-bottom-right-radius: 15px;
    font-size: 20px;
    font-weight: 600;
    color: #000;
    transition: .2s;
    cursor: pointer;

    &:hover {
        background-color: #f11717;
    }
`;

type ModalProps = {
    onClickContinue: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClickContinue }) => {
    return (
        <Wrapper>
            <Content>
                <Title>
                    <TitleText>Pause</TitleText>
                    <img width={60} height={60} src={pause} alt='pause image' /></Title>
                <ContentButtons>
                    <ContinueButton onClick={onClickContinue}>
                        Continue
                    </ContinueButton>
                    <Link to='/'>
                        <ExitButton>
                            Back to Home
                        </ExitButton>
                    </Link>
                </ContentButtons>
            </Content>
        </Wrapper>
    )
}

export default Modal