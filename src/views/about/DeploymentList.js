import HerokuLogo from "Assets/icons/heroku-original.svg";
import RailwayLogo from "Assets/icons/railway-original.svg";
import NetlifyLogo from "Assets/icons/netlify-original.svg";

import { FlexListWrap } from "Assets/styles/List";
import { BigHeading } from "Assets/styles/Para";
import IconToolTip from "Components/card/IconToolTip";

function ArchitectureList() {
  return (
    <article>
      <BigHeading>Deployment</BigHeading>
      <FlexListWrap>
        <IconToolTip img={HerokuLogo} text="Heroku" />
        <IconToolTip img={RailwayLogo} text="Railway" />
        <IconToolTip img={NetlifyLogo} text="Netlify" />
      </FlexListWrap>
    </article>
  );
}

export default ArchitectureList;
