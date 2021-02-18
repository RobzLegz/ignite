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
const upcoming_games = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=${gamesPerPage}`;
const new_Games = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=${gamesPerPage}`;

export const popularGamesURL = () => `${BASE_URL}${popular_games}${KEY}`;
export const upcomingGamesURL = () => `${BASE_URL}${upcoming_games}${KEY}`;
export const newGamesURL = () => `${BASE_URL}${new_Games}${KEY}`;
export const getGameDetailsURL = (game_id) => `${BASE_URL}games/${game_id}`;