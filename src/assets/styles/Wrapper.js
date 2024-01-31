import styled from "styled-components";

import { theme } from "./theme";

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

export const FlexAlignedDiv = styled(FlexDiv)`
  align-items: center;
`;

export const FlexRowCenter = styled(FlexDiv)`
  justify-content: center;
  margin-top: 15px;
`;

export const FlexCol = styled(FlexDiv)`
  flex-direction: column;
`;

export const FlexColGap = styled(FlexCol)`
  gap: 20px;
`;

export const FlexColAlign = styled(FlexCol)`
  align-items: center;
  flex: 1; // may create bugs
`;

export const MainFlexColCenter = styled(FlexCol)`
  padding: 30px;
  max-width: 800px;
  margin: 0 auto;
  height: 100%;

  @media (max-width: 700px) {
    padding: 30px 10px;
    max-width: 100vw;
    margin: 0;
    // height: 100%;
  }
`;

export const FlexColCenter = styled(FlexColAlign)`
  justify-content: center;
`;

export const ResponsiveFlexCol = styled(FlexColAlign)`
  @media (min-width: 1200px) {
    flex-direction: row;
  }
  gap: 20px;
  margin-bottom: 20px;
`;

export const GrayDiv = styled.div`
  background-color: ${theme.mediumGray};
  padding: 0 10px;
  min-height: 175px;
  border-radius: 0 0 5px 5px;
`;

export const RelativeDiv = styled.div`
  position: relative;
`;

export const MarginDiv = styled.div`
  margin: 0 10px;
`;
