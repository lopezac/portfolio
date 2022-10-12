import { FooterDiv } from "Assets/styles/GlobalStyle";
import { GrayPara } from "Assets/styles/Para";
import AuthorIcons from "../iconsRow/AuthorIcons";

export default function Footer() {
  return (
    <FooterDiv>
      <AuthorIcons />
      <GrayPara>Axel C. Lopez @Copyright 2022</GrayPara>
    </FooterDiv>
  );
}
