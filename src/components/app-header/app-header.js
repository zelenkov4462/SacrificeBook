import React from "react";
import './app-header.css';
import styled from 'styled-components';

const Header = styled.div `
    text-align: center;
    h1 {
    font-size: 26px;
    }
    p {
    font-size: 0.8rem
    }`;

const AppHeader = () => {
    return (
        <Header>
            <h1>SportBook sacrifice</h1>
            <p>Sacrifice now to get extra tokens!</p>
        </Header>
    )
}

export default AppHeader;