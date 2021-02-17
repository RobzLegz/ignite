import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { loadGames } from './actions/gamesAction';
import Game from './Game';

const Home = () => {

    const dispatch = useDispatch();

    const {popular,newGames,upcoming} = useSelector((state) => state.games);

    useEffect(() => {
        dispatch(loadGames());
    }, [dispatch]);

    return (
        <Gamelist className="home">
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
        </Gamelist>
    )
}

const Gamelist = styled(motion.div)``;

const Games = styled(motion.div)``;

export default Home
