import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    html{
        &::-webkit-scrollbar{
            width: 0.5rem;
        }
        &::-webkit-scrollbar-thumb{
            background-color: darkgray;
        }
    }
    body{
        font-family: 'PT Sans', sans-serif;
        width: 100%;
    }
    h1{
        font-size: 2rem;
        font-family: 'Reggae One', cursive;
        font-weight: lighter;
        color: #000;
    }
    h3{
        font-size: 1.3rem;
        color: #333;
        padding: 1.2rem;
        color: #fff;
    }
    p{
        font-size: 1.2rem;
        line-height: 200%;
        color: #f9f9f9;
    }
    a{
        text-decoration:none;
        color: #333;
    }
`;

export default GlobalStyles;