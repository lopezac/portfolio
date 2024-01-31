import JSLogo from "Assets/icons/javascript-original.svg";
import HTMLLogo from "Assets/icons/html5-original.svg";
import CSSLogo from "Assets/icons/css3-original.svg";
import PythonLogo from "Assets/icons/python-original.svg";
import RubyLogo from "Assets/icons/ruby-original.svg";
import TypeScriptLogo from "Assets/icons/typescript-original.svg";
import CLogo from "Assets/icons/c-original.svg";
import { FlexListWrap } from "Assets/styles/List";
import { BigHeading } from "Assets/styles/Para";
import IconToolTip from "Components/card/IconToolTip";

function LanguagesList() {
  return (
    <article>
      <BigHeading>Languages</BigHeading>
      <FlexListWrap>
        <IconToolTip img={CLogo} text="C" />
        <IconToolTip img={PythonLogo} text="Python" />
        <IconToolTip img={RubyLogo} text="Ruby" />
        <IconToolTip img={JSLogo} text="JavaScript" />
        <IconToolTip img={TypeScriptLogo} text="TypeScript" />
        <IconToolTip img={HTMLLogo} text="HTML5" />
        <IconToolTip img={CSSLogo} text="CSS" />
      </FlexListWrap>
    </article>
  );
}

export default LanguagesList;
