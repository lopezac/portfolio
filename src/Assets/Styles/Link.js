import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
`;

export const WhiteLink = styled(StyledLink)(
  ({ theme }) => `
    color: inherit;

    :hover, :focus {
      color: ${theme.lightViolet};
      text-decoration: underline;
    }
`
);

export const GrayLink = styled(StyledLink)(
  ({ theme }) => `
    color: ${theme.lightGray};

    display: flex;
    align-items: center;
    column-gap: 5px;

    :hover, :focus {
      color: ${theme.white};
    }
  `
);

export const WhiteAnchor = styled.a(
  ({ theme }) => `
    svg {
      color: ${theme.white};
      font-size: 2rem;

      :hover, :focus {
        color: ${theme.lightViolet};
      }
    }
  `
);
