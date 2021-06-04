//Styling and Animation
import styled from 'styled-components';
import {motion} from 'framer-motion';

const Game = ({name, id, image, released}) => {
     return(
         <StyledGame>
           <h3>{name}</h3>
           <p>{released}</p>
           <img src = {image} alt = {name} />
         </StyledGame>
     )
}

const StyledGame = styled(motion.div)`
    min-height:30vh;
    box-shadow: 0px 5px 30px rgba(0, 0, 20, 0.3);
    img{
        width:100%;
        height: 40vh;
        object-fit:cover;
    }
`;

export default Game;