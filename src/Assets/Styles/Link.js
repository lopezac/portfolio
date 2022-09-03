import { Link } from "react-router-dom";
import styled from "styled-components";

export const WhiteLink = styled(Link)(
  ({ theme }) => `
    text-decoration: none;
    color: inherit;
    font-size: 1.5rem;

    :hover, :focus {
      color: ${theme.lightViolet};
    }
`
);

export const WhiteAnchor = styled.a(
  ({ theme }) => `
    color: inherit;

    svg {
      color: white;
      font-size: 1.5rem;

      :hover, :focus {
        color: ${theme.lightViolet};
      }
    }
  `
);
