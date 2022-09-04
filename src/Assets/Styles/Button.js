import styled from "styled-components";

export const VioletBtn = styled.button(
  ({ theme }) => `
    background-color: ${theme.mediumViolet};
    border: none;
    border-radius: 10px;
    padding: 15px 25px;

    :hover, :focus {
      background-color: ${theme.violet};
    }
  `
);
