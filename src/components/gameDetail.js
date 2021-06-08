//Styling and Animation
import styled from 'styled-components';
import {motion} from 'framer-motion';

//Redux
import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
//IMAGES
import playstation from "../img/playstation.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import nintendo from "../img/nintendo.svg";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";
//Star Images
import starEmpty from "../img/star-empty.png";
import starFull from "../img/star-full.png";

const GameDetail = ({pathId}) => {

    const {game, screen, isLoading} = useSelector(state => state.detail)
    
    const history = useHistory();

    //Exit Detail handler
    const exitDetailHandler = (e)=> {
        const element = e.target;
        if(element.classList.contains('shadow')){
            document.body.style.overflow = 'auto';
            history.push('/')
        }
    }

   //Get platform Images
   const getPlatform = (platform) => {
    switch (platform) {
      case "PlayStation 4":
        return playstation;
      case "Xbox One":
        return xbox;
      case "PC":
        return steam;
      case "Nintendo Switch":
        return nintendo;
      case "iOS":
        return apple;
      default:
        return gamepad;
    }
  };

    return(
      <>
       {!isLoading && ( <StyledCardShadow className ="shadow" onClick={exitDetailHandler}> 
           <StyledDetail layoutId ={pathId}>
                <StyledStats>
                    <div className='rating'>
                       <h3>{game.name}</h3>
                       <p>Rating: {game.rating}</p>
                    </div>
                    <StyledInfo>
                        <h3>Platforms</h3>
                        <StyledPlatforms>
                            {game.platforms.map((data) =>(<img src={getPlatform(data.platform.name)} key={data.platform.id}/>))}
                        </StyledPlatforms>
                    </StyledInfo>
                </StyledStats>
                <StyledMedia>
                    <motion.img src={game.background_image} alt = 'name' layoutId={`image ${pathId}`}/>
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
       )}
       </>
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
   z-index: 5;
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
    z-index:10;
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
    text-align:right;
    h3{
        margin-bottom: 15px;
        color: red;
    }
`
const StyledPlatforms = styled(motion.div)`
    display: flex;
    justify-content: space-evenly;
    img{
        width:1.6rem;
        height:1.6rem;
        margin-left: 2rem;
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