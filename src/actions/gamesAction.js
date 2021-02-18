import axios from "axios";
import { newGamesURL, popularGamesURL, searchedGamesURL, upcomingGamesURL } from "../api";

export const loadGames = () => async (dispatch) => {
    const popularData = await axios.get(popularGamesURL());
    const upcominData = await axios.get(upcomingGamesURL());
    const newData = await axios.get(newGamesURL());
    dispatch({
        type: "FETCH_GAMES",
        payload:{
            popular: popularData.data.results,
            upcoming: upcominData.data.results,
            newGames: newData.data.results,
        },
    });
};

export const fetchSearchedGames = (game_name) => async (dispatch) => {
    searchGames = await axios.get(searchedGamesURL(game_name));
    dispatch({
        type: "FETCH_SEARCHED",
        payload: {
            searched: searchGames.data.results,
        },
    });
};
