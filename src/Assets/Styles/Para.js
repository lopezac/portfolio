import styled from "styled-components";

export const Para = styled.p`
  font-family: Poppins, Helvetica, sans-serif, arial;
  font-size: 1rem;
  margin: 8px 0;
`;

export const GrayPara = styled(Para)(
  ({ theme }) => `
    font-family: Poppins, Helvetica, sans-serif, arial;
    color: ${theme.lightGray};
  `
);

export const SmallGrayPara = styled(GrayPara)`
  font-size: 0.9rem;
  margin: 4px 0;
`;

export const BigParaEllipsis = styled(Para)`
  font-size: 1.2rem;

  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const ParaNoPad = styled(Para)(
  ({ theme }) => `
    margin-top: 0;
    padding-bottom: 10px;
    color: ${theme.lightGray};  
  `
);

export const Title = styled.h1`
  font-size: 2.5rem;
  margin: 0 0 16px 0;
`;

export const SubTitle = styled.h2`
  margin: 0 0 20px 0;
  font-size: 2rem;
  text-align: center;

  @media (min-width: 1200px) {
    text-align: start;
  }
`;

export const PostTitle = styled.h2`
  font-size: 2rem;
  margin: 0; //take care
`;

export const Heading = styled.h3`
  font-size: 1.1rem;
`;

export const BigHeading = styled.h3`
  font-size: 1.3rem;
`;

export const SpecialWord = styled.em`
  display: block;
  transition: transform 100ms ease-in;
  :hover {
    transform: rotate(1deg);
  }
`;
