import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.button`
    display: block;
    width: 200px;
    height: 50px;
    border-radius: 15px;
    margin: 0 auto;
    font-size: 20px;
    color: #222222;
    bottom: 120px;
    background-color: aqua;
    transition: .3s;
    cursor: pointer;
    
    &:hover {
        background-color: #0097a5;
    }
`;

type saveButtonProps = {
    onClickSave: () => void;
}

const SaveButton: React.FC<saveButtonProps> = ({ onClickSave }) => {
    return (
        <Link to='/'>
            <Wrapper onClick={onClickSave}>
                Save
            </Wrapper>
        </Link>
    )
}

export default SaveButton