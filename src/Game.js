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
    box-shadow: 0px 5px 25px rgba(0,0,0,0.3);
    text-align: center;
    border-radius: 30px;
    overflow: hidden;
    img{
        width: 100%;
        height: 40vh;
        object-fit:cover;
    }
`;

export default Game;
