import ProjectIcons from "../IconsRow/ProjectIcons";
import { ProjectImg } from "../../Assets/Styles/Image";
import { FlexDiv, GrayDiv } from "../../Assets/Styles/Wrapper";
import { Heading, ParaNoPad } from "../../Assets/Styles/Para";
import screenshotImg from "../../Assets/Images/screenshot.png";
import { ShadowCard } from "../../Assets/Styles/Card";

function ProjectCard() {
  return (
    <ShadowCard>
      <ProjectImg alt="" src={screenshotImg} />
      <GrayDiv>
        <FlexDiv>
          <Heading>Aliqua deserunt ullamco</Heading>
          <ProjectIcons githubURL="#" websiteURL="#" />
        </FlexDiv>
        <ParaNoPad>
          Sunt consectetur non irure elit pariatur, irure elit pariatur. Sunt
          consectetur non irure elit pariatur, irure elit pariatur.
        </ParaNoPad>
      </GrayDiv>
    </ShadowCard>
  );
}

export default ProjectCard;
