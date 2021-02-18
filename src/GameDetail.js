import { motion } from 'framer-motion';
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const GameDetail = () => {

    const {screen,game} = useSelector((state) => state.detail);

    return (
        <CardShadow className="cardShadow">
            <Detail className="gameDetail">
                <div className="gameStats">
                    <div className="gameRating">
                        <h1 className="ratingText">{game?.name}</h1>
                        <p className="ratingText">Rating:{game?.rating}</p>
                    </div>
                    <div className="gameInfo">
                        <h3 className="ratingText">Platforms</h3>
                        <div className="platforms">
                            {game?.platforms?.map((data) => (
                                <h3 className="ratingText" key={data?.platform?.id}>{data?.platform?.name}</h3>
                            ))}
                        </div>
                    </div>
                </div>
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
`;

const Detail = styled(motion.div)`
    width:80%;
    border-radius: 1rem;
    padding: 2rem 20rem;
    background: #fff;
    position: absolute;
    left: 10%;
    color: #000;
    z-index: 91;
    img{
        width:100%;
        margin: 50px 0;
        border-radius: 20px;
    }
    .ratingText{
        color:#000;
        padding:10px;
    }
    .lastText{
        margin-bottom: 50px;
    }
`;

export default GameDetail;
