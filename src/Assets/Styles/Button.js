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

export const LinkBtn = styled.button(
  ({ theme }) => `
    background-color: ${theme.gray};
    border: none;
    color: ${theme.lightViolet};
    text-decoration: underline;
    display: inline;
    cursor: pointer;
  `
);
