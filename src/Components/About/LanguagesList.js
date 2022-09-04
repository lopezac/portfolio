import JSLogo from "../../Assets/Icons/javascript-original.svg";
import HTMLLogo from "../../Assets/Icons/html5-original.svg";
import CSSLogo from "../../Assets/Icons/css3-original.svg";
import PythonLogo from "../../Assets/Icons/python-original.svg";
import RubyLogo from "../../Assets/Icons/ruby-original.svg";

import { FlexListWrap } from "../../Assets/Styles/List";
import { BigHeading } from "../../Assets/Styles/Para";
import IconToolTip from "../Card/IconToolTip";

function LanguagesList() {
  return (
    <article>
      <BigHeading>Languages</BigHeading>
      <FlexListWrap>
        <IconToolTip img={JSLogo} text="JavaScript" />
        <IconToolTip img={HTMLLogo} text="HTML5" />
        <IconToolTip img={CSSLogo} text="CSS" />
        <IconToolTip img={PythonLogo} text="Python" />
        <IconToolTip img={RubyLogo} text="Ruby" />
      </FlexListWrap>
    </article>
  );
}

export default LanguagesList;
