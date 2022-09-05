import { Outlet } from "react-router-dom";

import "../../Assets/Styles/Transitions.css";
import { MainDiv } from "../../Assets/Styles/GlobalStyle";
import { MainFlexColCenter } from "../../Assets/Styles/Wrapper";
import Footer from "../Footer";
import TopNav from "../TopNav";

export default function Layout() {
  return (
    <div>
      <TopNav />
      <MainDiv>
        <MainFlexColCenter>
          <Outlet />
        </MainFlexColCenter>
      </MainDiv>
      <Footer />
    </div>
  );
}
