import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme["purple"]};
  }

  body {
    background-color: ${(props) => props.theme["background"]};
    color: ${(props) => props.theme["base-text"]};
    -webkit-font-smoothing: antialised
  }

  body, input, textarea, button {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  h1 {
    font-size: 3rem;
    color: ${(props) => props.theme["base-title"]};
    font-family: "Baloo 2", sans-serif;
    line-height: 130%;
  }
`;
