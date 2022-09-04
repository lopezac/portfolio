import { FooterDiv } from "../../Assets/Styles/GlobalStyle";
import { GrayPara } from "../../Assets/Styles/Para";
import AuthorIcons from "../IconsRow/AuthorIcons";

export default function Footer() {
  return (
    <FooterDiv>
      <AuthorIcons />
      <GrayPara>Axel C. Lopez @Copyright 2022</GrayPara>
    </FooterDiv>
  );
}
