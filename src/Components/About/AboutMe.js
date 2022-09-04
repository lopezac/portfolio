import screenshotImg from "../../Assets/Images/screenshot.png";
import { AuthorImg } from "../../Assets/Styles/Image";
import { SubTitle, Para } from "../../Assets/Styles/Para";
import { ResponsiveFlexCol } from "../../Assets/Styles/Wrapper";

function AboutMe() {
  return (
    <section>
      <SubTitle>About Me</SubTitle>
      <ResponsiveFlexCol>
        <AuthorImg src={screenshotImg} alt="" />
        <div>
          <Para>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in.
          </Para>
          <Para>
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in.
          </Para>{" "}
          <Para>
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in.
          </Para>{" "}
        </div>
      </ResponsiveFlexCol>
    </section>
  );
}

export default AboutMe;
