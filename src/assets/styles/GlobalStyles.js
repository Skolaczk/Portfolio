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

    ::-webkit-scrollbar {
      width: 5px;
    }

    ::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.color.darkBlue};
    }

    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.color.blue};;
      border-radius: 5px;
    }
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }
`;
