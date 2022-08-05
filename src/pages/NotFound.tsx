import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;
  margin-top: 200px;        
`;

const NotFound = () => {
    return (
        <Wrapper>
            <h1 style={{ fontSize: '70px' }}>😕</h1>
            <h1 style={{ fontSize: '60px' }}>Oops...</h1>
            <p style={{ fontSize: '40px' }}>Sorry, the page is not accessible.</p>
        </Wrapper>
    )
}

export default NotFound