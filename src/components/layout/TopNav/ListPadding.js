import styled from "styled-components";
import { FlexList } from "Assets/styles/List";

const ListPadding = styled(FlexList)`
  gap: 25px;
  padding: 15px 40px;
  margin: 0;

  @media (max-width: 450px) {
    padding: 15px 0;
    justify-content: center;
  }
`;

export default ListPadding;
