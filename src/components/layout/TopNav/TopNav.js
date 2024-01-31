import { HeaderDiv } from "Assets/styles/GlobalStyle";
import { WhiteLink } from "Assets/styles/Link";
import ListPadding from "./ListPadding";
import LiMarginLeft from "./LiMarginLeft";

function TopNav() {
  return (
    <HeaderDiv>
      <nav>
        <ListPadding>
          <li>
            <WhiteLink to="/">Home</WhiteLink>
          </li>
          <LiMarginLeft>
            <WhiteLink to="about">About</WhiteLink>
          </LiMarginLeft>
          {/* <li>
            <WhiteLink to="projects">Projects</WhiteLink>
          </li> */}
        </ListPadding>
      </nav>
    </HeaderDiv>
  );
}

export default TopNav;
