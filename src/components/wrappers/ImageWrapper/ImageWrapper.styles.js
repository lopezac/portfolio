import styled from "styled-components";
import backgroundImg from "Assets/images/pexels-3.jpg";
import { theme } from "Assets/styles/theme";

export const ColorContainer = styled.div`
  background: transparent;
  overflow: hidden;

  ::before {
    content: "";
    z-index: -1;
    inset: 0;
    background-color: ${theme.darkBlack};
    width: 100%;
    height: 100%;
    position: absolute;
  }
`;

export const ImgContainer = styled(ColorContainer)`
  ::before {
    background-image: url(${backgroundImg});
    background-position: center;
    background-size: cover;
  }
`;
