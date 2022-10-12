import { Link } from "react-router-dom";
import styled from "styled-components";

import { theme } from "Assets/styles/theme";

const BorderLessBtn = styled.button`
  border: none;
`;

export const A = styled.a`
  text-decoration: none;
  color: inherit;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 1.2rem;
`;

export const StyledVioletBtn = styled(BorderLessBtn)`
  background-color: ${theme.mediumViolet};
  border-radius: 10px;
  padding: 15px 25px;
  transition: transform 100ms ease-in;

  :hover,
  :focus {
    background-color: ${theme.violet};
    transform: scale(1.05);
  }
`;

export const StyledLinkBtn = styled(BorderLessBtn)`
  background-color: inherit;
  color: ${theme.lightViolet};
  text-decoration: underline;
  display: inline;
  cursor: pointer;
  font-size: 0.9rem;
  margin-bottom: 2px;
`;