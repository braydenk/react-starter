import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 16px;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }

  ol, ul {
    list-style: none;
  }

  a {
    background-color: transparent;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;
