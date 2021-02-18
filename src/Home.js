import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { loadGames } from './actions/gamesAction';
import Game from './Game';
import GameDetail from './GameDetail';
import BackgroundImage from "./img/resourcesbasbdiasufgdosadsadsafdsfdsfdsfdsf.jpg";

const Home = () => {

    const dispatch = useDispatch();

    const {popular,newGames,upcoming} = useSelector((state) => state.games);

    useEffect(() => {
        dispatch(loadGames());
    }, [dispatch]);

    return (
        <Gamelist className="home">
            <img className="background-image" src={BackgroundImage} alt=""/>
            <GameDetail />
            <h1>Upcoming Games</h1>
            <Games>
                {upcoming?.map((game) => (
                    <Game 
                        key={game.id}
                        name={game.name} 
                        released={game.released} 
                        id={game.id}
                        image={game.background_image}
                    />
                ))}
            </Games>
            <h1>Upcoming Games</h1>
            <Games>
                {popular?.map((game) => (
                    <Game 
                        key={game.id}
                        name={game.name} 
                        released={game.released} 
                        id={game.id}
                        image={game.background_image}
                    />
                ))}
            </Games>
            <h1>Upcoming Games</h1>
            <Games>
                {newGames?.map((game) => (
                    <Game 
                        key={game.id}
                        name={game.name} 
                        released={game.released} 
                        id={game.id}
                        image={game.background_image}
                    />
                ))}
            </Games>
        </Gamelist>
    )
}

const Gamelist = styled(motion.div)`
    padding: 5rem;
    h1{
        padding: 5rem 0rem;
        z-index: 50;
    }
    .background-image{
        width: 100%;
        position:fixed;
        top:0;
        left:0;
        object-fit:contain;
        z-index: -1;
    }
`;

const Games = styled(motion.div)`
    z-index:50;
    min-height:80vh;
    display:grid;
    grid-template-columns: repeat(auto-fit,minmax(500px, 1fr));
    grid-column-gap:3rem;
    grid-row-gap: 5rem;
`;

export default Home;
