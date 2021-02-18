import { motion } from 'framer-motion';
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const GameDetail = () => {

    const {screen,game} = useSelector((state) => state.detail);

    return (
        <CardShadow className="cardShadow">
            <Detail className="gameDetail">
                <Stats className="gameStats">
                    <div className="gameRating">
                        <h1 className="ratingText">{game?.name}</h1>
                        <p className="ratingText">Rating:{game?.rating}</p>
                    </div>
                    <Info className="gameInfo">
                        <h3 className="ratingText">Platforms:</h3>
                        <Platforms className="platforms">
                            {game?.platforms?.map((data) => (
                                <h3 className="ratingText" key={data?.platform?.id}>{data?.platform?.name}</h3>
                            ))}
                        </Platforms>
                    </Info>
                </Stats>
                <div className="media">
                    <img src={game?.background_image} alt={game?.background_image}/>
                </div>
                <div className="description">
                    <p className="ratingText lastText">{game.description_raw}</p>
                </div>
                <div className="gallery">
                    {screen?.results?.map((screenshot) => (
                        <img src={screenshot?.image} alt={screenshot.id} key={screenshot?.id} />
                    ))}
                </div>
            </Detail>            
        </CardShadow>
    );
};

const CardShadow = styled(motion.div)`
    width:100%;
    min-height: 100vh;
    overflow-y: scroll;
    background: rgba(0,0,0,0.5);
    position: fixed;
    top:0;
    left: 0;
    z-index: 90;
    &::-webkit-scrollbar{
        width:0.5rem;
    }
    &::-webkit-scrollbar-thumb{
        background-color: #c7c2c2;
    }
    &::-webkit-scrollbar-track{
        background-color: #fff;
    }
`;

const Detail = styled(motion.div)`
    width:80%;
    padding: 2rem 15rem;
    background: #fff;
    position: absolute;
    left: 10%;
    color: #000;
    z-index: 91;
    img{
        width:100%;
        margin: 50px 0;
        border-radius: 20px;
        pointer-events:none;
    }
    .ratingText{
        color:#000;
        padding:10px;
    }
    .lastText{
        margin-bottom: 50px;
    }
`;

const Stats = styled(motion.div)`
    display:flex;
    align-items: center;
    justify-content:space-between;
`;

const Info = styled(motion.div)`
    text-align:center;
`;

const Platforms = styled(motion.div)`
    display:flex;
    justify-content:space-evenly;
    img{
        margin-left:3rem;
    }
`;

export default GameDetail;
