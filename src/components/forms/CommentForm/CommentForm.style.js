import styled from "styled-components";

import { theme } from "Assets/styles/theme";

export const StyledCommentForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;

  label {
    color: ${theme.lightGray};
    font-size: 0.9rem;
  }
`;

export const FormRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;
