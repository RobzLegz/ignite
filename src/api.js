import API_KEY from "./apikey";

const BASE_URL = `https://api.rawg.io/api/games?key=${API_KEY}`;
const getMonth = () => {
    const month = new Date().getMonth() + 1;
    if(month < 10){
        return `0${month}`;
    }else{
        return month;
    }
}
