import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }
    html{
        overflow-y:scroll;
        scrollbar-color: blue;
        
        &::-webkit-scrollbar{
            width:0.5rem;
        }
        &::-webkit-scrollbar-thumb{
            background-color:blue;
        }
        &::-webkit-scrollbar-track{
        background-color: darkgrey;
   }
    }

    body{
        font-family: 'Montserrat', sans-serif;
        width:100%;
        
    }
    h2{ 
        color: #333;
        padding:0;
        font-size: 2rem;
        font-family: 'Abril FatFace', cursive;
        font-weight: lighter;
        letter-spacing: 7px;
    }

    h3{
        font-size: 1rem;
        color: #333;
    }

    p{
      font-size: 0.9rem;
      color: #696969;
      line-height: 200%;
    }

    a{
        text-decoration:none;
    }
`;

export default GlobalStyles;