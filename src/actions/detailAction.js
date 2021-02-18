import axios from "axios";
import { getGameDetailsURL, getGameScreenshotsURL } from "../api";

export const loadDetails = (id) => async (dispatch) => {

    const detailData = await axios.get(getGameDetailsURL(id));
    const screenshotData = await axios.get(getGameScreenshotsURL(id));

    dispatch({
        type: "GET_DETAIL",
        payload:{
            game: detailData.data,
            screenshots: screenshotData.data,
        },
    });
};
