//Styling and Animation
import styled from 'styled-components';
import {motion} from 'framer-motion';

//Redux
import{useSelector} from 'react-redux'

const GameDetail = () => {
    const {game, screen} = useSelector(state => state.detail)
    return(
       <StyledCardShadow>
           <StyledDetail>
                <StyledStats>
                    <div className='rating'>
                       <h3>{game.name}</h3>
                       <p>Rating: {game.rating}</p>
                    </div>
                    <StyledInfo>
                        <h3>Platforms</h3>
                        <StyledPlatforms>
                            {game.platforms.map((data) =>( <h3 key={data.platform.id}>{data.platform.name} </h3>))}
                        </StyledPlatforms>
                    </StyledInfo>
                </StyledStats>
                <StyledMedia>
                    <img src={game.background_image} alt = 'name'></img>
                </StyledMedia>
                <StyledDescription>
                  <p>{game.description_raw}</p>
                </StyledDescription>
                <div className='gallery'>
                  {screen.results.map(screen => (
                      <img src ={screen.image} key ={screen.id} alt={screen.id}/>
                  ))}
                </div>
           </StyledDetail>
       </StyledCardShadow>
    );
}

const StyledCardShadow = styled(motion.div)`
   width: 100%;
   min-height: 100vh;
   overflow-y: scroll;
   background: rgba(0,0,0,0.5);
   position: fixed;
   top: 0;
   left: 0;
   &::-webkit-scrollbar{
       width: 0.5rem;
   }
   &::-webkit-scrollbar-thumb{
      background-color: red;
   }
   &::-webkit-scrollbar-track{
        background-color: white;
   }
`
const StyledDetail = styled(motion.div)`
    width: 80%;
    border-radius: 1rem;
    padding: 2rem 5rem;
    background: white;
    position: absolute;
    left: 10%;
    color: black;
    img{
        width:100%;
    }
`

const StyledStats = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const StyledInfo = styled(motion.div)`
    text-align: center;
`
const StyledPlatforms = styled(motion.div)`
    display: flex;
    justify-content: space-evenly;
    img{
        margin-left: 3rem;
    }
`
const StyledMedia = styled(motion.div)`
    margin-top: 2rem;
    img{
        width: 100%;
    }
`

const StyledDescription = styled(motion.div)`
    margin: 3rem 0rem;
`
export default GameDetail;