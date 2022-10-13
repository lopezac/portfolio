import styled from "styled-components";

import { theme } from "./theme";

export const FlexList = styled.ul`
  display: flex;
  padding: 0;
  margin-top: 12px;
  margin-bottom: 8px;
  list-style-type: none;
  gap: 15px;
`;

export const FlexListRight = styled(FlexList)`
  margin-left: auto;
  margin-bottom: 12px;
`;

export const ListPadding = styled(FlexList)`
  gap: 40px;
  padding: 15px 40px;
  margin: 0;
`;

export const ListNoMargin = styled(FlexList)`
  margin-bottom: 0;
`;

export const FlexListWrap = styled(FlexList)`
  flex-wrap: wrap;
`;

export const ListCircle = styled(FlexList)`
  list-style-type: circle;
  gap: 20px;
  color: ${theme.lightGray};
  font-size: 0.9rem;

  li:nth-child(1) {
    list-style-type: none;
  }
`;
