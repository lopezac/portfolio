import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  color: inherit;
`;

export const WhiteAnchor = styled.a`
  color: inherit;

  svg {
    color: white;
    font-size: 1.5rem;
  }
`;
