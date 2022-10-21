import styled from "styled-components";
import { theme } from "Assets/styles/theme";

export const StyledWhiteAnchor = styled.a`
  svg {
    color: ${theme.white};
    font-size: 1.8rem;

    :hover,
    :focus {
      color: ${theme.lightViolet};
    }
  }
`;

export const StyledGrayAnchor = styled(StyledWhiteAnchor)`
  svg {
    color: ${theme.lightGray};
  }
`;
