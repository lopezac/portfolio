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
