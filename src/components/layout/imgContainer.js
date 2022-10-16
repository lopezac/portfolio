import styled from "styled-components";
import backgroundImg from "Assets/images/pexels-3.jpg";

export const ImgContainer = styled.div`
  background: transparent;
  overflow: hidden;

  ::before {
    content: "";
    z-index: -1;
    inset: 0;
    background-image: url(${backgroundImg});
    background-size: cover;
    width: 100%;
    height: 100%;
    position: absolute;
    background-position: center;
  }
`;
