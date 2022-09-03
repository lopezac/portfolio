import ProjectIcons from "../IconsRow/ProjectIcons";
import { ProjectImg } from "../../Assets/Styles/Image";
import { FlexDiv, GrayDiv } from "../../Assets/Styles/Wrapper";
import { ParaNoPad } from "../../Assets/Styles/Para";
import screenshotImg from "../../Assets/Images/screenshot.png";

function ProjectCard() {
  return (
    <article>
      <ProjectImg alt="" src={screenshotImg} />
      <GrayDiv>
        <FlexDiv>
          <h3>Aliqua deserunt ullamco</h3>
          <ProjectIcons githubURL="#" websiteURL="#" />
        </FlexDiv>
        <ParaNoPad>
          Sunt consectetur non irure elit pariatur, irure elit pariatur.
        </ParaNoPad>
      </GrayDiv>
    </article>
  );
}

export default ProjectCard;
