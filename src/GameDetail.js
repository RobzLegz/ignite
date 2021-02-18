import React from 'react';
import { useSelector } from 'react-redux';

const GameDetail = () => {

    const {screen,game} = useSelector((state) => state.detail);

    return (
        <div className="cardShadow">
            <div className="gameDetail">
                <div className="gameStats">
                    <div className="gameRating">
                        <h3>{game.name}</h3>
                        <p>Rating:{game.rating}</p>
                    </div>
                    <div className="gameInfo">
                        <h3>Platforms</h3>
                        <div className="platforms">
                            {game.platforms.map((data) => (
                                <h3 key={data.platform.id}>{data.platform.name}</h3>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="media">
                <img src={game.background_image} alt="images"/>
            </div>
            <div className="gallery">
                {screen.results.map((screenshot) => (
                    <img src={screenshot.image} alt={screenshot.id} key={screenshot.id} />
                ))}
            </div>
        </div>
    );
};

export default GameDetail;
