import ReactLogo from "Assets/icons/react-original.svg";
import SocketIoLogo from "Assets/icons/socketio.png";
import StyledComponentsLogo from "Assets/icons/styled-components.svg";
import SassLogo from "Assets/icons/sass-original.svg";

import { FlexListWrap } from "Assets/styles/List";
import { BigHeading } from "Assets/styles/Para";
import IconToolTip from "Components/card/IconToolTip";

function FrontEndList() {
  return (
    <article>
      <BigHeading>Front End Skills</BigHeading>
      <FlexListWrap>
        <IconToolTip img={ReactLogo} text="React" />
        <IconToolTip img={SocketIoLogo} text="Socket.IO" />
        <IconToolTip img={StyledComponentsLogo} text="Styled Components" />
        <IconToolTip img={SassLogo} text="Sass" />
      </FlexListWrap>
    </article>
  );
}

export default FrontEndList;
