import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import settings from '../assets/settings.svg'

const Wrapper = styled.div`
    width: 400px;
    margin: 0 auto;
    text-align: center;
`;

const Title = styled.div`
    display: inline-flex;
    align-items: center;
    margin: 0 auto;
    margin-bottom: 40px;
`;

const TitleText = styled.h1`
    font-size: 60px;
    margin-right: 15px;
`

const List = styled.ul`
    width: 100%;
    height: 500px;
    padding: 50px;
    border: 5px solid #fff;
    border-radius: 30px;
    
    li {
        font-size: 40px; 
        transition: .3s;
        cursor: pointer;
        
        &:hover {
            font-size: 50px;
        }
    }

    li:not(:last-child) {
        margin-bottom: 20px;
        
        &:hover {
            margin-bottom: 9px;
        }
    };
`;

const Settings = () => {
    return (
        <Wrapper>
            <Title>
                <TitleText>Settings</TitleText>
                <img src={settings} width={65} height={65} alt='settings' />
            </Title>

            <List>
                <li><Link to='/board-size'>Board size</Link></li>
                <li><Link to='/snake-color'>Snake color</Link></li>
                <li><Link to='/snake-speed'>Snake speed</Link></li>
                <li><Link to='/mods'>Mods</Link></li>
                <li><Link to='/control'>Control</Link></li>
                <li><Link to='/food'>Food</Link></li>
            </List>
        </Wrapper>
    )
}

export default Settings