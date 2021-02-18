import axios from "axios";
import { getGameDetailsURL } from "../api";

const loadDetails = (id) => async (dispatch) => {
    const detailData = await axios.get(getGameDetailsURL(id));
    dispatch({
        type: "GET_DETAIL",
        payload:{
            game: detailData.data,
        },
    });
};