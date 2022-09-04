import LinuxLogo from "../../Assets/Icons/linux-original.svg";
import GitLogo from "../../Assets/Icons/git-original.svg";
import WebpackLogo from "../../Assets/Icons/webpack-original.svg";
import VSCodeLogo from "../../Assets/Icons/vscode-original.svg";
import npmLogo from "../../Assets/Icons/npm-original.svg";
import VimLogo from "../../Assets/Icons/vim-original.svg";
import JestLogo from "../../Assets/Icons/jest-original.svg";
import { FlexList } from "../../Assets/Styles/List";
import { BigHeading } from "../../Assets/Styles/Para";
import { IconImg } from "../../Assets/Styles/Image";

function ToolsList() {
  return (
    <article>
      <BigHeading>Tools</BigHeading>
      <FlexList>
        <li>
          <IconImg src={LinuxLogo} alt="Linux" />
        </li>
        <li>
          <IconImg src={GitLogo} alt="Git" />
        </li>
        <li>
          <IconImg src={WebpackLogo} alt="Webpack" />
        </li>
        <li>
          <IconImg src={npmLogo} alt="npm" />
        </li>
        <li>
          <IconImg src={VSCodeLogo} alt="Visual Studio Code" />
        </li>
        <li>
          <IconImg src={VimLogo} alt="Vim" />
        </li>
        <li>
          <IconImg src={JestLogo} alt="Jest" />
        </li>
      </FlexList>
    </article>
  );
}

export default ToolsList;
