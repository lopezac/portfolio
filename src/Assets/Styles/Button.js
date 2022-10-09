import styled from "styled-components";

const BorderLessBtn = styled.button`
  border: none;
`;

export const VioletBtn = styled(BorderLessBtn)(
  ({ theme }) => `
    background-color: ${theme.mediumViolet};
    border-radius: 10px;
    padding: 15px 25px;
    transition: transform 100ms ease-in;

    :hover, :focus {
      background-color: ${theme.violet};
      transform: scale(1.05);
    }
  `
);

export const LinkBtn = styled(BorderLessBtn)(
  ({ theme }) => `
    background-color: inherit;
    color: ${theme.lightViolet};
    text-decoration: underline;
    display: inline;
    cursor: pointer;
    font-size: 0.9rem;
    margin-bottom: 2px;
  `
);
