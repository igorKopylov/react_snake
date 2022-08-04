import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import arrowLeft from '../assets/arrowCountLeft.svg'

const Wrapper = styled.button`
    position: relative;
    display: flex;
    align-items: center;
    width: 210px;
    height: 50px;
    margin: 30px 0 0 60px;
    background-color: #151515;
    border-radius: 30px;
    transition: .2s;
    cursor: pointer;

    &:hover {
        background-color: #323232;

        svg {
            margin-left: 25px;
        }
    }
`;

const Text = styled.p`
    margin: 0 auto;
`;

const Svg = styled.svg`
    position: absolute;
    margin-left: 40px;
    transition: .2s;
`;

const BackButton = () => {
    return (
        <Link to='/'>
            <Wrapper>
                <Svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <polyline points="15 18 9 12 15 6" /></Svg>
                <Text>GO BACK</Text>
            </Wrapper>
        </Link>
    )
}

export default BackButton