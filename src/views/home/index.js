import { FaArrowRight } from "react-icons/fa";
import { useDocTitle } from "Hooks";
import { SpecialWord } from "Assets/styles/Para";
import { FlexColCenter } from "Assets/styles/Wrapper";
import { VioletBtn } from "Components/button";
import { ImgContainer } from "Components/wrappers";
import { GrayLink } from "Assets/styles/Link";
import Title from "./Title";

export default function Home() {
  const [docTitle, setDocTitle] = useDocTitle(
    "Axel Lopez | Software Engineer student"
  );

  return (
    <>
      <ImgContainer />
      <FlexColCenter>
        <Title>Hello, I'm Axel Lopez{<br />}</Title>
        <Title>
          <SpecialWord>a Software Engineer student</SpecialWord>
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
