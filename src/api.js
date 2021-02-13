import API_KEY from "./apikey";

const BASE_URL = `https://api.rawg.io/api/`;
const KEY = `key=${API_KEY}`;
const gamesPerPage = 10;

const getMonth = () => {
    const month = new Date().getMonth() + 1;
    if(month < 10){
        return `0${month}`;
    }else{
        return month;
    }
};

const getDay = () => {
    const day = new Date().getDate();
    if(day < 10){
        return `0${day}`;
    }else{
        return day;
    }
};

const currentYear = new Date().getFullYear();
const currentMonth = getMonth();
const currentDay = getDay();

const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=${gamesPerPage}`;

export const popularGamesURL = () => `${BASE_URL}${popular_games}${KEY}`;