import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 1.2rem;
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
      font-size: 1.8rem;

      :hover, :focus {
        color: ${theme.lightViolet};
      }
    }
  `
);

export const GrayAnchor = styled(WhiteAnchor)(
  ({ theme }) => `
    svg {
      color: ${theme.lightGray};
    }
  `
);
