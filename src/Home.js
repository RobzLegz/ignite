import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadGames } from './actions/gamesAction';

const Home = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadGames());
    }, []);

    return (
        <div className="home">
            
        </div>
    )
}

export default Home
