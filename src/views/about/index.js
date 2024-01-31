import AboutMe from "./AboutMe";
import Skills from "./Skills";
import { MarginDiv } from "Assets/styles/Wrapper";

export default function About() {
  return (
    <MarginDiv>
      <AboutMe />
      <Skills />
    </MarginDiv>
  );
}
