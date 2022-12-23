import JamstackLogo from "Assets/icons/jamstack-original.png";
import FeaturedSlicedLogo from "Assets/icons/feature-sliced-original.png";

import { FlexListWrap } from "Assets/styles/List";
import { BigHeading } from "Assets/styles/Para";
import IconToolTip from "Components/card/IconToolTip";

function ArchitectureList() {
  return (
    <article>
      <BigHeading>Architectures</BigHeading>
      <FlexListWrap>
        <IconToolTip img={JamstackLogo} text="Jamstack" />
        <IconToolTip img={FeaturedSlicedLogo} text="Featured-sliced design" />
      </FlexListWrap>
    </article>
  );
}

export default ArchitectureList;
