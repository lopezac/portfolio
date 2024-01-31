import { useDocTitle } from "Hooks";
import screenshotImg from "Assets/images/screenshot.jpg";
import { AuthorImg } from "Assets/styles/Image";
import { Title, Para } from "Assets/styles/Para";
import { FlexAlignedDiv, ResponsiveFlexCol } from "Assets/styles/Wrapper";
import BtnToolTip from "Components/card/BtnToolTip";
import AuthorIcons from "Components/iconsRow/AuthorIcons";

function AboutMe() {
  const [docTitle, setDocTitle] = useDocTitle("About Me");

  return (
    <section>
      <Title>About Me</Title>
      <ResponsiveFlexCol>
        <AuthorImg src={screenshotImg} alt="" />
        <div>
          <Para>
            Hello I'm Axel Carlos Lopez, a Software Engineer student at FIUBA,
            currently in 2nd year. Currently learning C, contributing at some
            open source projects, and working on a small Python script.
          </Para>
          <Para>
            I have always been around computers since I've been a child, I'm
            interested in Linux. I enjoy solving and working on problems.
          </Para>
          <FlexAlignedDiv>
            <Para>Write me at</Para>
            <BtnToolTip />
          </FlexAlignedDiv>
          <AuthorIcons />
        </div>
      </ResponsiveFlexCol>
    </section>
  );
}

export default AboutMe;
