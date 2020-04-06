import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    background-color: #fff;
    font-size: 16px; /* 1em = 18px */
    font-family: 'Roboto', 'Noto Sans TC';
  }

  html, body {
    width: 100%;
    height: 100%;
  }

  p {
    padding: 0;
    margin: 0;
    color: rgba(0, 0, 0, 0.87);
  }

  ol, ul {
    list-style: none;
  }

  input, button {
    outline: none;
    border: none;

    &:focus {
      outline: none;
    }
  }

  a {
    color: rgba(0, 0, 0, 0.87);
  }
`;
