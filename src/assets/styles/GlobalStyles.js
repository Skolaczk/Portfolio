import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }
  
  body {
    font-size: 1.6rem;
    font-family: 'Source Sans Pro', sans-serif;
    overflow: ${({ isOpen }) => (isOpen ? 'hidden' : '')};
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }
`;
