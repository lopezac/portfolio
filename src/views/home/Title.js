import styled from "styled-components";
import { Title } from "Assets/styles/Para";

const ResponsiveTitle = styled(Title)`
  @media (max-width: 450px) {
    font-size: 2.2rem;
  }
  @media (max-width: 390px) {
    font-size: 2.1rem;
  }
  @media (max-width: 390px) {
    font-size: 1.8rem;
  }
`;

export default ResponsiveTitle;
