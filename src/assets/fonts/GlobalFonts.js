import { createGlobalStyle } from "styled-components";

import Poppins from "./Poppins-Regular.woff2";

export const GlobalFonts = createGlobalStyle`
  @font-face {
    font-family: "Poppins";
    src: url(${Poppins}) format("woff2");
  }

  @font-face {
    font-family: "Noto Serif";
    src: url(${Poppins}) format("woff2");
  }
`;
