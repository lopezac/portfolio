import ReactLogo from "../../Assets/Icons/react-original.svg";
import NodeJSLogo from "../../Assets/Icons/nodejs-original.svg";
import FirebaseLogo from "../../Assets/Icons/firebase-original.svg";

import { FlexListWrap } from "../../Assets/Styles/List";
import { BigHeading } from "../../Assets/Styles/Para";
import IconToolTip from "../Card/IconToolTip";

function TechnologiesList() {
  return (
    <article>
      <BigHeading>Technologies</BigHeading>
      <FlexListWrap>
        <IconToolTip img={ReactLogo} text="React" />
        <IconToolTip img={NodeJSLogo} text="NodeJS" />
        <IconToolTip img={FirebaseLogo} text="Firebase" />
      </FlexListWrap>
    </article>
  );
}

export default TechnologiesList;
