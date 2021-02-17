import { motion } from 'framer-motion';
import React from 'react'
import styled from 'styled-components';

const Game = ({name,released,id,image}) => {
    return (
        <StyledGame>
            <h3>{name}</h3>
            <p>{released}</p>
            <img src={image} alt={name}/>
        </StyledGame>
    )
}

const StyledGame = styled(motion.div)`
    min-height:30vh;
    text-align: center;
    border-radius: 30px;
    overflow: hidden;
    background: linear-gradient(90deg, #2178DE, #14B4FA );
    padding: 30px;
    cursor: pointer;
    h3{
        margin: 10px 0
    }
    img{
        width: 80%;
        height: 30vh;
        object-fit:cover;
        margin:0;
        padding:0;
        border-radius: 20px;
        margin-top: 10px;
    }
`;

export default Game;
