import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  min-width: 374px;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.font};
  margin: 0;
  font-family: "Nunito", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

section {
  padding-bottom: 144px;
  
  @media ${theme.media.M} {
      padding-bottom: 80px;
    }
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
  color: ${theme.colors.font};
  cursor: pointer;
}

button {
  background-color: unset;
  border: none;
}

`
