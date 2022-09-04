import styled from "styled-components";

export const GrayCard = styled.article(
  ({ theme }) => `
    background-color: ${theme.mediumGray};
  `
);

export const ShadowCard = styled.article(
  ({ theme }) => `
    filter: drop-shadow(1px 1px 2px ${theme.black});
  `
);
