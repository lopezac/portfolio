import { Outlet } from "react-router-dom";

import { MainDiv } from "../../Assets/Styles/GlobalStyle";
import { MainFlexColCenter } from "../../Assets/Styles/Wrapper";
import Footer from "../Footer";
import TopNav from "../TopNav";

export default function Layout() {
  return (
    <>
      <TopNav />
      <MainDiv>
        <MainFlexColCenter>
          <Outlet />
        </MainFlexColCenter>
      </MainDiv>
      <Footer />
    </>
  );
}
