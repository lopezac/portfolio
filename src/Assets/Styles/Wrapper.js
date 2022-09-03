import styled from "styled-components";

export const GridColumns3To1 = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;

  @media (min-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const FlexDiv = styled.div`
  display: flex;
`;

export const FlexCol = styled(FlexDiv)`
  flex-direction: column;
`;

export const FlexColCenter = styled(FlexCol)`
  justify-content: center;
  align-items: center;
`;

export const MainFlexColCenter = styled(FlexColCenter)(
  ({ theme }) => `
    padding: 30px;
    max-width: 1100px;
    margin: 0 auto;
    height: 100%;
  `
);

export const GrayDiv = styled.div(
  ({ theme }) => `
    background-color: ${theme.mediumGray};
    padding: 0 10px;
    min-height: 175px;
  `
);
