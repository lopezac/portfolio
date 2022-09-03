import styled from "styled-components";

export const FlexList = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  list-style-type: none;
  gap: 15px;
`;

export const FlexListRight = styled(FlexList)`
  margin-left: auto;
`;

export const ListPadding = styled(FlexList)`
  gap: 40px;
  padding: 20px 40px;
`;
