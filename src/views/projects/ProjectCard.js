import { string } from "prop-types";

import ProjectIcons from "Components/iconsRow/ProjectIcons";
import { ProjectImg } from "Assets/styles/Image";
import { FlexDiv, GrayDiv } from "Assets/styles/Wrapper";
import { Heading, ParaNoPad } from "Assets/styles/Para";
import { ShadowCard } from "Assets/styles/Card";

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
