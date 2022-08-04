import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Settings from '../components/Settings';

const Wrapper = styled.div`
    width: 500px;
    margin: 20px auto;
`;

const PlayButton = styled.button`
    position: relative;
    display: block;
    width: 270px;
    height: 60px;
    background-color: #ff8e0e;
    font-size: 25px;
    border: none;
    border-radius: 20px;
    margin: 100px auto;
    margin-top: 30px;
    transition: .2s;
    cursor: pointer;

    &:hover {
        background-color: #ffa743;

        svg {
            left: 220px;
        }
    }
`;

const BtnContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #272626;
`

const Svg = styled.svg`
    position: absolute;
    left: 205px;
    top: 2;
    transition: .2s;
`;

const Home = () => {
    return (
        <Wrapper>
            <Settings />
            <Link to='/game'>
                <PlayButton>
                    <BtnContainer>
                        Play
                        <Svg width='25' height='25' fill='#272626' viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/Svg"><polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9" />
                        </Svg>
                    </BtnContainer>
                </PlayButton>
            </Link>
        </Wrapper>
    )
}

export default Home