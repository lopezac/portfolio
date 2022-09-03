import { HeaderDiv } from "../../Assets/Styles/GlobalStyle";
import { WhiteLink } from "../../Assets/Styles/Link";
import { ListPadding } from "../../Assets/Styles/List";
import { LiMarginLeft } from "../../Assets/Styles/ListItem";

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
          <li>
            <WhiteLink to="projects">Projects</WhiteLink>
          </li>
        </ListPadding>
      </nav>
    </HeaderDiv>
  );
}

export default TopNav;
