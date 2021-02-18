import { motion } from 'framer-motion';
import React from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import {loadDetails} from "./actions/detailAction";

const Game = ({name,released,id,image,setPopupState}) => {

    const dispatch = useDispatch();

    const loadDetailHan = () => {
        dispatch(loadDetails(id));
        setPopupState(true);
    };

    return (
        <StyledGame onClick={loadDetailHan}>
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
    background: rgba( 255, 255, 255, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4.0px );
    -webkit-backdrop-filter: blur( 4.0px );
    border-radius: 30px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
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
