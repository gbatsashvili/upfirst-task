import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-size: 14px;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }

`;

export const Theme = {
  textColorDark: "#1D1717",
  textColorLight: "#fff",
  darkBG: "#4E647F",
  lightBG: "#D9D9D9",
  violetBg: "#969EB9",
  primaryViolet: "#A79CED",
  primaryGreen: "#3BB490",
};

export default GlobalStyle;
