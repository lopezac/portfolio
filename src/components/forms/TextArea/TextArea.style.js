import styled from "styled-components";

import { theme } from "Assets/styles/theme";

export const StyledTextArea = styled.textarea`
  border-radius: 5px;
  padding: 5px;
  border: 1px solid ${theme.lightGray};
  background-color: ${theme.lightGray};
`;
