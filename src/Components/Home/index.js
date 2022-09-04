import { FaArrowRight } from "react-icons/fa";

import { Title } from "../../Assets/Styles/Para";
import { FlexColCenter } from "../../Assets/Styles/Wrapper";
import { VioletBtn } from "../../Assets/Styles/Button";
import { GrayLink } from "../../Assets/Styles/Link";

export default function Home() {
  return (
    <FlexColCenter>
      <Title>Hello, I'm Axel Lopez, a Front End Developer</Title>
      <VioletBtn>
        <GrayLink to="about">
          Know more <FaArrowRight />
        </GrayLink>
      </VioletBtn>
    </FlexColCenter>
  );
}
