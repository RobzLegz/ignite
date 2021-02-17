import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadGames } from './actions/gamesAction';
import Game from './Game';

const Home = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadGames());
    }, []);

    return (
        <div className="home">
            <Game />
        </div>
    )
}

export default Home
