import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import { string } from "prop-types";

import { FlexListRight } from "Assets/styles/List";
import { WhiteAnchor } from "Components/anchor";

function ProjectIcons({ githubURL, websiteURL }) {
  return (
    <FlexListRight>
      <li>
        <WhiteAnchor href={githubURL} aria-label="Project GitHub">
          <BsGithub aria-label="GitHub" />
        </WhiteAnchor>
      </li>
      <li>
        <WhiteAnchor href={websiteURL} aria-label="Project website">
          <FiExternalLink aria-label="Website" />
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
