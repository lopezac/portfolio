import ReactLogo from "Assets/icons/react-original.svg";
import NodeJSLogo from "Assets/icons/nodejs-original.svg";
import FirebaseLogo from "Assets/icons/firebase-original.svg";
import ExpressLogo from "Assets/icons/express-original.svg";
import MongodbLogo from "Assets/icons/mongodb-original.svg";
import PugLogo from "Assets/icons/pugjs.svg";
import SassLogo from "Assets/icons/sass-original.svg";

import { FlexListWrap } from "Assets/styles/List";
import { BigHeading } from "Assets/styles/Para";
import IconToolTip from "Components/card/IconToolTip";

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
