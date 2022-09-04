import JSLogo from "../../Assets/Icons/javascript-original.svg";
import HTMLLogo from "../../Assets/Icons/html5-original.svg";
import CSSLogo from "../../Assets/Icons/css3-original.svg";
import PythonLogo from "../../Assets/Icons/python-original.svg";
import RubyLogo from "../../Assets/Icons/ruby-original.svg";
import { FlexList } from "../../Assets/Styles/List";
import { BigHeading } from "../../Assets/Styles/Para";
import { IconImg } from "../../Assets/Styles/Image";

function LanguagesList() {
  return (
    <article>
      <BigHeading>Languages</BigHeading>
      <FlexList>
        <li>
          <IconImg src={JSLogo} alt="JavaScript" />
        </li>
        <li>
          <IconImg src={HTMLLogo} alt="HTML5" />
        </li>
        <li>
          <IconImg src={CSSLogo} alt="CSS" />
        </li>
        <li>
          <IconImg src={PythonLogo} alt="Python" />
        </li>
        <li>
          <IconImg src={RubyLogo} alt="Ruby" />
        </li>
      </FlexList>
    </article>
  );
}

export default LanguagesList;
