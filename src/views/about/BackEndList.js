import NodeJSLogo from "Assets/icons/nodejs-original.svg";
import FirebaseLogo from "Assets/icons/firebase-original.svg";
import ExpressLogo from "Assets/icons/express-original.svg";
import MongodbLogo from "Assets/icons/mongodb-original.svg";
import MongooseJSLogo from "Assets/icons/mongoose-original.png";
import PugLogo from "Assets/icons/pugjs.svg";

import { FlexListWrap } from "Assets/styles/List";
import { BigHeading } from "Assets/styles/Para";
import IconToolTip from "Components/card/IconToolTip";

function BackEndList() {
  return (
    <article>
      <BigHeading>Back End Skills</BigHeading>
      <FlexListWrap>
        <IconToolTip img={NodeJSLogo} text="NodeJS" />
        <IconToolTip img={FirebaseLogo} text="Firebase" />
        <IconToolTip img={ExpressLogo} text="Express" />
        <IconToolTip img={MongodbLogo} text="Mongo Database" />
        <IconToolTip img={MongooseJSLogo} text="MongooseJS" />
        <IconToolTip img={PugLogo} text="PugJS template engine" />
      </FlexListWrap>
    </article>
  );
}

export default BackEndList;
