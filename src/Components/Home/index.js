import { FaArrowRight } from "react-icons/fa";

import { Title, SpecialWord } from "../../Assets/Styles/Para";
import { FlexColCenter } from "../../Assets/Styles/Wrapper";
import { VioletBtn } from "../../Assets/Styles/Button";
import { GrayLink } from "../../Assets/Styles/Link";

export default function Home() {
  return (
    <FlexColCenter>
      <Title>
        Hello, I'm Axel Lopez{<br />}
        <SpecialWord>a Front End Developer</SpecialWord>
      </Title>
      <VioletBtn>
        <GrayLink to="about">
          Know more <FaArrowRight />
        </GrayLink>
      </VioletBtn>
    </FlexColCenter>
  );
}