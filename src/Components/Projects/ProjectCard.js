import { string } from "prop-types";

import ProjectIcons from "../IconsRow/ProjectIcons";
import { ProjectImg } from "../../Assets/Styles/Image";
import { FlexDiv, GrayDiv } from "../../Assets/Styles/Wrapper";
import { Heading, ParaNoPad } from "../../Assets/Styles/Para";
import { ShadowCard } from "../../Assets/Styles/Card";

function ProjectCard({ title, description, websiteURL, githubURL, imgPath }) {
  return (
    <ShadowCard>
      <ProjectImg alt={title} src={imgPath} />
      <GrayDiv>
        <FlexDiv>
          <Heading>{title}</Heading>
          <ProjectIcons githubURL={githubURL} websiteURL={websiteURL} />
        </FlexDiv>
        <ParaNoPad>{description}</ParaNoPad>
      </GrayDiv>
    </ShadowCard>
  );
}

ProjectCard.propTypes = {
  title: string,
  description: string,
  websiteURL: string,
  githubURL: string,
  imgPath: string,
};

export default ProjectCard;
