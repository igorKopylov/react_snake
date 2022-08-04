import React from 'react';
import styled from 'styled-components'
import Board from '../components/Board';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const Game = () => {
    return (
        <Wrapper>
            <Board />
        </Wrapper>
    )
}

export default Game