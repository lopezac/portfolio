import styled, { createGlobalStyle } from "styled-components";
import "modern-normalize";

import { theme } from "./theme";

export const GlobalStyle = createGlobalStyle`
    body > #root {
      height: 100vh;
      color: ${theme.white};
      // font-family: Poppins, Helvetica, sans-serif, arial;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      display: grid;
      grid-template-rows: auto 1fr auto;
      grid-template-columns: 1fr;
      grid-template-areas: 
        "header"
        "main"
        "footer";

      }

    ::selection {
      background-color: ${theme.violet};
    }
  `;

export const HeaderDiv = styled.header`
  grid-area: header;
  background-color: ${theme.darkBlack};
  border-bottom: 1px solid ${theme.mediumGray};
`;

export const MainDiv = styled.main`
  grid-area: main;
  background-color: ${theme.darkBlack};
`;

export const FooterDiv = styled.footer`
  grid-area: footer;
  background-color: ${theme.darkBlack};
  border-top: 1px solid ${theme.mediumGray};
  padding-bottom: 8px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
