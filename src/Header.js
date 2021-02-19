import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import {fetchSearchedGames} from "./actions/gamesAction";

const Header = () => {

    const [gameNameInput, setGameNameInput] = useState("");
    const dispatch = useDispatch();

    const submitSearch = (e) => {
        e.preventDefault();
        dispatch(
            fetchSearchedGames(gameNameInput)
        );
        setGameNameInput("");
    };

    return (
        <StyledHeader className="header">
            <form className="search">
                <input onChange={(e) => setGameNameInput(e.target.value)} value={gameNameInput} placeholder="Search Games" type="text"/>
                <button onClick={submitSearch} type="submit">Search</button>
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
