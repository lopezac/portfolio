import LinuxLogo from "../../Assets/Icons/linux-original.svg";
import GitLogo from "../../Assets/Icons/git-original.svg";
import WebpackLogo from "../../Assets/Icons/webpack-original.svg";
import npmLogo from "../../Assets/Icons/npm-original.svg";
import JestLogo from "../../Assets/Icons/jest-original.svg";
import ESLintLogo from "../../Assets/Icons/eslint-original.svg";
import UbuntuLogo from "../../Assets/Icons/ubuntu-plain.svg";
import HerokuLogo from "../../Assets/Icons/heroku-original.svg";
// import VimLogo from "../../Assets/Icons/vim-original.svg";
// import VSCodeLogo from "../../Assets/Icons/vscode-original.svg";

import { FlexListWrap } from "../../Assets/Styles/List";
import { BigHeading } from "../../Assets/Styles/Para";
import IconToolTip from "../Card/IconToolTip";

function ToolsList() {
  return (
    <article>
      <BigHeading>Tools</BigHeading>
      <FlexListWrap>
        <IconToolTip img={LinuxLogo} text="Linux" />
        <IconToolTip img={GitLogo} text="Git" />
        <IconToolTip img={WebpackLogo} text="Webpack" />
        <IconToolTip img={ESLintLogo} text="ESLint" />
        <IconToolTip img={npmLogo} text="npm" />
        <IconToolTip img={JestLogo} text="Jest" />
        <IconToolTip img={UbuntuLogo} text="Ubuntu Linux distro" />
        <IconToolTip img={HerokuLogo} text="Heroku" />

        {/* <IconToolTip img={VSCodeLogo} text="Visual Studio Code" />
        <IconToolTip img={VimLogo} text="Vim" /> */}
      </FlexListWrap>
    </article>
  );
}

export default ToolsList;
