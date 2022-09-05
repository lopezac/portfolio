import screenshotImg from "../../Assets/Images/screenshot.png";
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
            Hello I'm Axel Carlos Lopez, a self-taught front end developer based
            in Buenos Aires, Argentina. Currently learning ReactJS and
            JavaScript, planning learning Express, MongoDB, Bootstrap and
            TypeScript
          </Para>
          <Para>
            Always been around computers since I've been a child, interested in
            Linux. I enjoy solving problems.
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
