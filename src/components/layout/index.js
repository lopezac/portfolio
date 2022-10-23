import { Outlet } from "react-router-dom";

import { MainDiv } from "Assets/styles/GlobalStyle";
import { MainFlexColCenter } from "Assets/styles/Wrapper";
import Footer from "./Footer";
import TopNav from "./TopNav";
import { ColorContainer } from "Components/wrappers";

export default function Layout() {
  return (
    <>
      <TopNav />
      <MainDiv>
        <ColorContainer />
        <MainFlexColCenter>
          <Outlet />
        </MainFlexColCenter>
      </MainDiv>
      <Footer />
    </>
  );
}
