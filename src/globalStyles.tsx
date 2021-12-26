import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    line-height: 1.5;
  }

  html, body {
    margin: 0;
    padding: 0;
    font-size: 10px; 
    background-color: rgba(var(--black), 1);
  }

  a {
    text-decoration: none;
    color: rgba(var(--white), 1);
  }

  p {
    margin: 0;
    padding: 0;
  }

  :root {
    --black: 3, 3, 3;
    --white: 255, 255, 255;
    --yellow: 245, 197, 24;
  }
`;

export default GlobalStyle;
