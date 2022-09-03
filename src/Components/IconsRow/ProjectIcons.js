import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import { string } from "prop-types";

import { FlexListRight } from "../../Assets/Styles/List";
import { WhiteAnchor } from "../../Assets/Styles/Link";

function ProjectIcons({ githubURL, websiteURL }) {
  return (
    <FlexListRight>
      <li>
        <WhiteAnchor href={githubURL}>
          <BsGithub />
        </WhiteAnchor>
      </li>
      <li>
        <WhiteAnchor href={websiteURL}>
          <FiExternalLink />
        </WhiteAnchor>
      </li>
    </FlexListRight>
  );
}

ProjectIcons.propTypes = {
  githubURL: string,
  websiteURL: string,
};

export default ProjectIcons;
