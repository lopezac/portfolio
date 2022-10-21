import { FaArrowRight } from "react-icons/fa";

import { Title, SpecialWord } from "Assets/styles/Para";
import { FlexColCenter } from "Assets/styles/Wrapper";
import { VioletBtn } from "Components/button";
import { GrayLink } from "Assets/styles/Link";

export default function Home() {
  return (
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
  );
}
