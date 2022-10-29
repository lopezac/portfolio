import styled from "styled-components";
import { Title } from "Assets/styles/Para";

const ResponsiveTitle = styled(Title)`
  @media (max-width: 450px) {
    font-size: 2rem;
  }
  @media (max-width: 350px) {
    font-size: 1.8rem;
  }
`;

export default ResponsiveTitle;
