import screenshotImg from "../../Assets/Images/screenshot.jpg";
import { AuthorImg } from "../../Assets/Styles/Image";
import { SubTitle, Para } from "../../Assets/Styles/Para";
import { FlexAlignedDiv, ResponsiveFlexCol } from "../../Assets/Styles/Wrapper";
import BtnToolTip from "../Card/BtnToolTip";
import AuthorIcons from "../IconsRow/AuthorIcons";

function AboutMe() {
  return (
    <section>
      <SubTitle>About Me</SubTitle>
      <ResponsiveFlexCol>
        <AuthorImg src={screenshotImg} alt="" />
        <div>
          <Para>
            Hello I'm Axel Carlos Lopez, a self-taught full stack developer
            based in Buenos Aires, Argentina. I work with the MERN Stack.
            Currently learning NodeJS, Express and MongoDB. In the future I'm
            going to learn Bootstrap and TypeScript
          </Para>
          <Para>
            Always been around computers since I've been a child, I'm interested
            in Linux. I enjoy solving and working on problems.
          </Para>
          <FlexAlignedDiv>
            <Para>Get in touch with me. Write me at</Para>
            <BtnToolTip />
          </FlexAlignedDiv>
          <AuthorIcons />
        </div>
      </ResponsiveFlexCol>
    </section>
  );
}

export default AboutMe;
