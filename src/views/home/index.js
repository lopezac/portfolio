import { FaArrowRight } from "react-icons/fa";
import { useDocTitle } from "Hooks";
import { Title, SpecialWord } from "Assets/styles/Para";
import { FlexColCenter } from "Assets/styles/Wrapper";
import { VioletBtn } from "Components/button";
import { ImgContainer } from "Components/wrappers";
import { GrayLink } from "Assets/styles/Link";

export default function Home() {
  const [docTitle, setDocTitle] = useDocTitle(
    "Axel Lopez | Full Stack Developer"
  );

  return (
    <>
      <ImgContainer />
      <FlexColCenter>
        <Title>
          Hello, I'm Axel Lopez{<br />}
          <SpecialWord>a Full Stack Developer</SpecialWord>
        </Title>
        <GrayLink to="about">
          <VioletBtn>
            Know more <FaArrowRight />
          </VioletBtn>
        </GrayLink>
      </FlexColCenter>
    </>
  );
}
