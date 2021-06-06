import {useEffect} from 'react';
//Redux
import {useDispatch, useSelector} from 'react-redux';
import {loadGames} from '../actions/gamesAction';

//Components
import Game from '../components/game';
import GameDetail from '../components/gameDetail'

//Styling and Animation
import styled from 'styled-components';
import {motion} from 'framer-motion';

const Home = () => {

    const {popular, upcoming} = useSelector(state => state.games)
    
    const dispatch = useDispatch();
    
    useEffect( ()=> {
        dispatch(loadGames());
    }, [dispatch])

    return(
     <StyleGameList>
        <GameDetail /> 
        <h2>Popular Games</h2>
        <StyledGames>
           {popular.map( game => (
              <Game 
                 name= {game.name}
                 id ={game.id}
                 released ={game.released}
                 key = {game.name}
                 image ={game.background_image}
             />)
           )}
        </StyledGames>

        <h2>Upcomig Games</h2>
       <StyledGames>
           {upcoming.map( game => (
              <Game 
                 name= {game.name}
                 id ={game.id}
                 released ={game.released}
                 key = {game.name}
                 image ={game.background_image}
             />)
           )}
        </StyledGames>
     </StyleGameList>
    )
}
const StyleGameList = styled(motion.div)`
    padding: 0rem 5rem;
   
`;
const StyledGames = styled(motion.div)`
    min-height:80vh;
    margin-bottom:100px;
    display:grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 3rem;
`;

export default Home;


