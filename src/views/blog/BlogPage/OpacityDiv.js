import styled from "styled-components";
import { FlexDiv } from "Assets/styles/Wrapper";

const OpacityDiv = styled(FlexDiv)`
  opacity: 0.8;

  &:hover,
  &:focus {
    opacity: 1;
  }

  @media (max-width: 500px) {
    flex-direction: column;

    img {
      // height: 175px;
    }

    img,
    div {
      width: 100%;
    }

    div {
      border-radius: 0 0 5px 5px;
    }
  }
`;

export default OpacityDiv;
