import ReactLogo from "../../Assets/Icons/react-original.svg";
import NodeJSLogo from "../../Assets/Icons/nodejs-original.svg";
import FirebaseLogo from "../../Assets/Icons/firebase-original.svg";
import { FlexList } from "../../Assets/Styles/List";
import { BigHeading } from "../../Assets/Styles/Para";
import { IconImg } from "../../Assets/Styles/Image";

function TechnologiesList() {
  return (
    <article>
      <BigHeading>Technologies</BigHeading>
      <FlexList>
        <li>
          <IconImg src={ReactLogo} alt="React" />
        </li>
        <li>
          <IconImg src={NodeJSLogo} alt="NodeJS" />
        </li>
        <li>
          <IconImg src={FirebaseLogo} alt="Firebase" />
        </li>
      </FlexList>
    </article>
  );
}

export default TechnologiesList;
