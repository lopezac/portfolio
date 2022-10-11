import { FaArrowRight } from "react-icons/fa";

import { Title, SpecialWord } from "Assets/styles/Para";
import { FlexColCenter } from "Assets/styles/Wrapper";
import { VioletBtn } from "Assets/styles/Button";
import { GrayLink } from "Assets/styles/Link";

export default function Home() {
  return (
    <FlexColCenter>
      <Title>
        Hello, I'm Axel Lopez{<br />}
        <SpecialWord>a Full Stack Developer</SpecialWord>
      </Title>
      <VioletBtn>
        <GrayLink to="about">
          Know more <FaArrowRight />
        </GrayLink>
      </VioletBtn>
    </FlexColCenter>
  );
}
