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
  white-space: nowrap;
  z-index: 1;
  display: flex;
  justify-content: center;
`;

export const GrayCard = styled.div`
  background-color: ${theme.mediumGray};
  padding: 10px;
  border-radius: 0 5px 5px 0;
  width: 73%;
`;

export const LightGrayCard = styled(GrayCard)`
  background-color: ${theme.gray};
  padding: 0 10px 10px 10px;
  border-radius: 5px;
  width: 100%;
`;
