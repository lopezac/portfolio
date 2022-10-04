import ReactLogo from "../../Assets/Icons/react-original.svg";
import NodeJSLogo from "../../Assets/Icons/nodejs-original.svg";
import FirebaseLogo from "../../Assets/Icons/firebase-original.svg";
import ExpressLogo from "../../Assets/Icons/express-original.svg";
import MongodbLogo from "../../Assets/Icons/mongodb-original.svg";
import PugLogo from "../../Assets/Icons/pugjs.svg";
import SassLogo from "../../Assets/Icons/sass-original.svg";

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
        <IconToolTip img={ExpressLogo} text="Express" />
        <IconToolTip img={MongodbLogo} text="Mongo Database" />
        <IconToolTip img={PugLogo} text="PugJS template engine" />
        <IconToolTip img={SassLogo} text="Sass" />
      </FlexListWrap>
    </article>
  );
}

export default TechnologiesList;
