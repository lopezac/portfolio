import styled, { createGlobalStyle } from "styled-components";
import "modern-normalize";

export const GlobalStyle = createGlobalStyle(
  ({ theme }) => `
    body {
      height: 100vh;
      color: ${theme.white};
      font-family: "Noto Serif", Catamaran, arial;
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
  `
);

export const HeaderDiv = styled.header(
  ({ theme }) => `
    grid-area: header;
    background-color: ${theme.black};
    border-bottom: 1px solid ${theme.lightViolet};
  `
);

export const MainDiv = styled.main(
  ({ theme }) => ` 
    grid-area: main;
    background-color: ${theme.gray};
  `
);

export const FooterDiv = styled.footer(
  ({ theme }) => `
    grid-area: footer;
    background-color: ${theme.black};
    border-top: 1px solid ${theme.lightViolet};

    display: flex;
    flex-direction: column;
    align-items: center; 
  `
);
