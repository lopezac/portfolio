import styled from "styled-components";

import { theme } from "./theme";

export const ShadowCard = styled.article`
  filter: drop-shadow(1px 1px 3px ${theme.mediumGray});
`;

export const ToolTipCard = styled.label`
  position: absolute;
  bottom: -2.4rem;
  left: 2px;
  background-color: ${theme.mediumGray};
  color: ${theme.white};
  padding: 10px;
  min-width: 50px;
  white-space: nowrap;
`;

export const GrayCard = styled.div`
  background-color: ${theme.mediumGray};
  padding: 10px;
  width: 100%;
  border-radius: 0 5px 5px 0;
`;

export const LightGrayCard = styled(GrayCard)`
  background-color: ${theme.gray};
  padding: 0 10px 10px 10px;
  border-radius: 5px;
`;
