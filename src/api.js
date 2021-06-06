//Base URL 
 const base_url = 'https://api.rawg.io/api/';
 const apiKey = process.env.REACT_APP_GAMES_API;

//Getting the date
const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    if(month<10){
        return`0${month}`
    }else{
        return month;
    }
}

//Getting the day
const getCurrentDay = () => {
    const day = new Date().getDate();
    if(day<10){
        return`0${day}`
    }else{
        return day;
    }
}

//Current day/month/year
const currentYear  = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay   = getCurrentDay();
const lastYear     = `${currentYear-1}-${currentMonth}-${currentDay}`;
const nextYear     = `${currentYear+1}-${currentMonth}-${currentDay}`;
const currentDate  = `${currentYear}-${currentMonth}-${currentDay}`;

const popular_games = `games?key=${apiKey}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?key=${apiKey}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const new_games = `games?key=${apiKey}&${nextYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL= () =>`${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${new_games}`;

//Game details
export const gameDetailsURL = (id) => `${base_url}games/${id}?key=${apiKey}`;
//Game screenshots
export const gameScreenshotURL = (id) => `${base_url}games/${id}/screenshots?key=${apiKey}`;