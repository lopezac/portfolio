import NodeJSLogo from "Assets/icons/nodejs-original.svg";
import LinuxLogo from "Assets/icons/linux-original.svg";
import FirebaseLogo from "Assets/icons/firebase-original.svg";
import ExpressLogo from "Assets/icons/express-original.svg";
import MongodbLogo from "Assets/icons/mongodb-original.svg";
import ReactLogo from "Assets/icons/react-original.svg";
import GitLogo from "Assets/icons/git-original.svg";
import { FlexListWrap } from "Assets/styles/List";
import { BigHeading } from "Assets/styles/Para";
import IconToolTip from "Components/card/IconToolTip";

function Technologies() {
  return (
    <article>
      <BigHeading>Technologies</BigHeading>
      <FlexListWrap>
        <IconToolTip img={NodeJSLogo} text="NodeJS" />
        <IconToolTip img={FirebaseLogo} text="Firebase" />
        <IconToolTip img={ExpressLogo} text="Express" />
        <IconToolTip img={ReactLogo} text="React" />
        <IconToolTip img={MongodbLogo} text="Mongo Database" />
        <IconToolTip img={LinuxLogo} text="Linux" />
        <IconToolTip img={GitLogo} text="Git" />
      </FlexListWrap>
    </article>
  );
}

export default Technologies;
