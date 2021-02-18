import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import logo from "./img/logo.svg";

const Header = () => {
    return (
        <StyledHeader className="header">
            <img src={logo} alt="logo"/>
            <form className="search">
                <input placeholder="Search Games" type="text"/>
                <button type="submit">Search</button>
            </form>
        </StyledHeader>
    )
}

const StyledHeader = styled(motion.nav)`
    height: 60px;
    display: flex;
    justify-content:center;
    align-items:center;
    width:100%;
    position:fixed;
    z-index: 100;
    background: rgba( 255, 255, 255, 0.60 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 3.0px );
    -webkit-backdrop-filter: blur( 3.0px );
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    img{
        height:40px;
        width:auto;
        cursor: pointer;
        margin-right: 30px;
    }
    form > input{ 
        width:300px;
        height: 40px;
        outline:none;
        font-size:1rem;
        padding: 0 10px;
        border: 1px solid #000;
    }
    form > button{
        height: 40px;
        width:100px;
        background:#000;
        color:#fff;
        font-size: 1rem;
        cursor: pointer;
        outline:none;
        border:none;
        transition: all 0.5s ease;
    }
    form > button:hover{
        background:#fff;
        color:#000;
        border: 1px solid #000;
    }
`;

export default Header
