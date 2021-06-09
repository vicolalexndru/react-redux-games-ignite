import axios from 'axios';
import {popularGamesURL, upcomingGamesURL, newGamesURL, searchGameURL} from '../api';

export const loadGames = () => async (dispatch) => {

    //Fetch Games
    const popularData  = await axios.get(popularGamesURL())
    const newGames = await axios.get(newGamesURL())
    const upcoming  = await axios.get(upcomingGamesURL())
    
    dispatch({
        type:"FETCH_GAMES",
        payload: {
            popular: popularData.data.results,
            newGames: newGames.data.results,
            upcoming: upcoming.data.results
        }
    })

}

export const fetchSearch = (game_name) => async(dispatch) => {

const searchGames = await axios.get(searchGameURL(game_name));

dispatch({
    type: "FETCH_SEARCHED",
    payload:{
        searched: searchGames.data.results,
    }
})

}