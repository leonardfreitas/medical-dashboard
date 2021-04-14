import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --background: #252A4A;
    --dark: #202342;
    --shape: #6266F4;
    --white: #ffffff;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background);
    color: var(--white);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  /* width */
  ::-webkit-scrollbar {
    width: 0.4rem;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #c9c9c9;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--shape);
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: var(--background);
  }
`;
