//Styling and Animation
import styled from 'styled-components';
import {motion} from 'framer-motion';


const Nav = () => {
    return(
      <StyleNav>
        <StyledSearch>
            <form>
                <input type='search' placeholder='Search Game' />
                <button type='submit'>Search</button>
            </form>
        </StyledSearch>
      </StyleNav>
    );
}

const StyledSearch = styled(motion.div)`
    padding: 3rem 5rem;
    text-align: center;
    h1{
        font-size: 1.3rem;
    }
    input{
        width: 30%;
        font-size: 1.2rem;
        padding: 0.4rem;
        border: none;
        outline: none;
        box-shadow: 0px 0px 30px rgba(0,0,0,0.2);
        font-familly: 'Montserrat', sans-serif;
    }
    button{
        font-size: 1.2rem;
        color: white;
        background: red;
        border:none;
        outline: none;
        padding: 0.4rem 1rem;
        margin-left: 5px;
        cursor: pointer;
    }
`

const StyleNav = styled(motion.div)`

`

export default Nav;