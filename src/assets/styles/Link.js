import { Link } from "react-router-dom";
import styled from "styled-components";

import { theme } from "./theme";

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-size: 1.2rem;
`;

export const WhiteLink = styled(StyledLink)`
  :hover,
  :active {
    color: ${theme.lightViolet};
    text-decoration: underline;
  }
`;

export const GrayLink = styled(StyledLink)`
  color: ${theme.lightGray};

  display: flex;
  align-items: center;
  column-gap: 5px;

  :hover,
  :active {
    color: ${theme.white};
  }
`;

export const AnchorLink = styled.a`
  text-decoration: none;
  color: inherit;
`;

export const WhiteAnchorLink = styled(AnchorLink)`
  color: ${theme.white};
`;

export const GrayAnchorLink = styled(AnchorLink)`
  color: ${theme.mediumGray};

  &:hover,
  &:focus {
    color: ${theme.white};
  }
`;
