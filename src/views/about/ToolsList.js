import LinuxLogo from "Assets/icons/linux-original.svg";
import GitLogo from "Assets/icons/git-original.svg";
import WebpackLogo from "Assets/icons/webpack-original.svg";
import npmLogo from "Assets/icons/npm-original.svg";
import JestLogo from "Assets/icons/jest-original.svg";
import ESLintLogo from "Assets/icons/eslint-original.svg";
import UbuntuLogo from "Assets/icons/ubuntu-plain.svg";
import VSCodeLogo from "Assets/icons/vscode-original.svg";

import { FlexListWrap } from "Assets/styles/List";
import { BigHeading } from "Assets/styles/Para";
import IconToolTip from "Components/card/IconToolTip";

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
        <IconToolTip img={VSCodeLogo} text="Visual Studio Code" />
      </FlexListWrap>
    </article>
  );
}

export default ToolsList;
