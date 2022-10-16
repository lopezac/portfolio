import { Outlet } from "react-router-dom";

import { MainDiv } from "Assets/styles/GlobalStyle";
import { MainFlexColCenter } from "Assets/styles/Wrapper";
import Footer from "./Footer";
import TopNav from "./TopNav";
import { ImgContainer } from "./imgContainer";

export default function Layout() {
  return (
    <>
      <TopNav />
      <MainDiv>
        <ImgContainer />
        <MainFlexColCenter>
          <Outlet />
        </MainFlexColCenter>
      </MainDiv>
      <Footer />
    </>
  );
}
