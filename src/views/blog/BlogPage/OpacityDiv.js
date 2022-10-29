import styled from "styled-components";
import { FlexDiv } from "Assets/styles/Wrapper";

const OpacityDiv = styled(FlexDiv)`
  opacity: 0.8;

  &:hover,
  &:focus {
    opacity: 1;
  }

  @media (max-width: 700px) {
    flex-direction: column;

    img {
      height: 100%;
      width: 100%;
    }

    div {
      border-radius: 0 0 5px 5px;
      width: 100%;
    }
  }

  @media (max-width: 320px) {
    img {
      height: 200px;
    }
  }
`;

export default OpacityDiv;
