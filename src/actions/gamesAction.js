import axios from "axios";
import { newGamesURL, popularGamesURL, upcomingGamesURL } from "../api";

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

