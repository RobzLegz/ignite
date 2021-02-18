import { motion } from 'framer-motion';
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import playstation from './img/playstation.svg';
import steam from './img/steam.svg';
import xbox from './img/xbox.svg';
import nintendo from './img/nintendo.svg';
import apple from './img/apple.svg';
import gamepad from './img/gamepad.svg';
import starFull from "./img/star-full.png";
import starEmpty from "./img/star-empty.png";

const GameDetail = ({setPopupState}) => {

    const {screen,game} = useSelector((state) => state.detail);

    const togglePopupVisibility = () => {
        document.body.style.overflow = "auto";
        setPopupState(false)
    }

    document.body.style.overflow = "hidden";

    const getPlatformImages = (platform) => {
        switch(platform){
            case "PlayStation 4":
              return playstation;
            case "PlayStation 5":
              return playstation;
            case "Xbox Series S/X":
              return xbox;
            case "Xbox S":
              return xbox;
            case "Xbox One":
              return xbox;
            case "PC":
              return steam;
            case "Nintendo Switch":
              return nintendo;
            case "iOS":
              return apple;
            default:
              return gamepad;
        }
    }

    const getStars = () => {
        const stars = [];
        const rating = Math.floor(game.rating);
        for(let i = 1; i <=5; i++){
            if(i <= rating){
                stars.push(<img className="ratingImage" alt={game.rating} key={i} src={starFull} />)
            }else{
                stars.push(<img className="ratingImage" alt={game.rating} key={i} src={starEmpty} />)
            }
        }
        return stars;
    }

    return (
        <CardShadow className="cardShadow">
            <div className="cardShadowLeft" onClick={togglePopupVisibility}></div>
            <Detail className="gameDetail">
                <Stats className="gameStats">
                    <div className="gameRating">
                        <h1 className="ratingText">{game?.name}</h1>
                        <p className="ratingText">Rating:{game?.rating}</p>
                        {getStars()}
                    </div>
                    <Info className="gameInfo">
                        <Platforms className="platforms">
                            {game?.platforms?.map((data) => (
                                <img className="ratingText" key={data?.platform?.id} src={getPlatformImages(data?.platform?.name)} />
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
                {/* <div className="gallery">
                    {screen?.results?.map((screenshot) => (
                        <img src={screenshot?.image} alt={screenshot.id} key={screenshot?.id} />
                    ))}
                </div> */}
            </Detail>     
            <div className="cardShadowRight" onClick={togglePopupVisibility}></div>       
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
    .cardShadowRight,
    .cardShadowLeft{
        width:11%;
        height:100%;
        position:fixed;
        top:0;
        cursor: pointer;
    }
    .cardShadowRight{
        margin:0;
        padding:0;
        right:0;
    }
    .cardShadowLeft{
        left:0;
    }
`;

const Detail = styled(motion.div)`
    width:80%;
    min-height: 100%;
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
    .ratingImage{
        width:2rem;
        height:2rem;
        display:inline;
    }
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
