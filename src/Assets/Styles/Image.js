import styled from "styled-components";

export const ProjectImg = styled.img`
  display: block;
  width: 100%;
  height: auto;
  border-radius: 5px 5px 0 0;
`;

export const AuthorImg = styled.img(
  ({ theme }) => `
    max-width: 80%;
    height: auto;
    filter: drop-shadow(1px 1px 2px ${theme.black});

    @media (min-width: 600px) {
      max-width: 60%;
    }

    @media (min-width: 1200px) {
      max-width: 50%;
    }
  `
);

export const IconImg = styled.img`
  width: 48px;
  height: 48px;
`;
