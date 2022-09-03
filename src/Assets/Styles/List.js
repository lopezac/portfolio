import styled from "styled-components";

export const FlexList = styled.ul`
  display: flex;
  padding: 0;
  // margin: 0;
  list-style-type: none;
  gap: 15px;
`;

export const FlexListRight = styled(FlexList)`
  margin-left: auto;
`;

export const ListPadding = styled(FlexList)`
  gap: 40px;
  padding: 15px 40px;
`;

export const ListNoMargin = styled(FlexList)`
  margin-bottom: 0;
`;
