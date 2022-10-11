import { Outlet } from "react-router-dom";

import { MainDiv } from "Assets/styles/GlobalStyle";
import { MainFlexColCenter } from "Assets/styles/Wrapper";
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
