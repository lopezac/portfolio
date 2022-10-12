import styled from "styled-components";

export const ShadowCard = styled.article(
  ({ theme }) => `
    filter: drop-shadow(1px 1px 2px ${theme.black});
  `
);

export const ToolTipCard = styled.label(
  ({ theme }) => `
    position: absolute;
    bottom: -2.4rem;
    left: 2px;
    background-color: ${theme.black};
    color: ${theme.white};
    padding: 10px;
    min-width: 50px;
    // overflow: hidden;
    white-space: nowrap;
  `
);

export const GrayCard = styled.div(
  ({ theme }) => `
    background-color: ${theme.black};
    padding: 10px;
    width: 100%;
  `
);