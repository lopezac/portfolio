import styled from "styled-components";

export const ProjectImg = styled.img`
  display: block;
  width: 100%;
  height: auto;
  border-radius: 5px 5px 0 0;
`;

export const AuthorImg = styled.img`
  width: 70%;
  height: auto;

  @media (min-width: 700px) {
    width: 60%;
  }

  @media (min-width: 1200px) {
    width: 125%;
  }
`;

export const IconImg = styled.img`
  width: 48px;
  height: 48px;
`;
