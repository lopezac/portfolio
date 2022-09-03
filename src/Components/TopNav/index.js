import { HeaderDiv } from "../../Assets/Styles/GlobalStyle";
import { StyledLink } from "../../Assets/Styles/Link";
import { ListPadding } from "../../Assets/Styles/List";
import { LiMarginLeft } from "../../Assets/Styles/ListItem";

function TopNav() {
  return (
    <HeaderDiv>
      <nav>
        <ListPadding>
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>
          <LiMarginLeft>
            <StyledLink to="about">About</StyledLink>
          </LiMarginLeft>
          <li>
            <StyledLink to="projects">Projects</StyledLink>
          </li>
        </ListPadding>
      </nav>
    </HeaderDiv>
  );
}

export default TopNav;
