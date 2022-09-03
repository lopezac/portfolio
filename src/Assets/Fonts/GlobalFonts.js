import { createGlobalStyle } from "styled-components";

import Catamaran from "./Catamaran.woff2";
import NotoSerif from "./NotoSerif.woff2";

export const GlobalFonts = createGlobalStyle`
  @font-face {
    font-family: "Catamaran";
    src: url(${Catamaran}) format("woff2");
  }

  @font-face {
    font-family: "Noto Serif";
    src: url(${NotoSerif}) format("woff2");
  }
`;
