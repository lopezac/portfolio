import styled from "styled-components";

export const Para = styled.p`
  font-family: Catamaran, Garamond, serif;
  font-size: 1rem;
`;

export const GrayPara = styled(Para)(
  ({ theme }) => `
    font-family: "Noto Serif", Garamond, serif;
    color: ${theme.lightGray};
  `
);

export const ParaNoPad = styled(Para)(
  ({ theme }) => `
    margin-top: 0;
    color: ${theme.lightGray};  
  `
);

export const Title = styled.h1`
  font-size: 2.5rem;
`;

export const SubTitle = styled.h2`
  margin: 0 0 20px 0;
  font-size: 2rem;
  text-align: center;

  @media (min-width: 1200px) {
    text-align: start;
  }
`;

export const Heading = styled.h3`
  font-size: 1.2rem;
`;

export const BigHeading = styled.h3`
  font-size: 1.3rem;
`;
