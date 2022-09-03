import ProjectIcons from "../IconsRow/ProjectIcons";
import { ProjectImg } from "../../Assets/Styles/Image";
import { FlexDiv } from "../../Assets/Styles/Wrapper";
import screenshotImg from "../../Assets/Images/screenshot.png";

function ProjectCard() {
  return (
    <article>
      <ProjectImg alt="" src={screenshotImg} />
      <FlexDiv>
        <h3>Aliqua deserunt ullamco</h3>
        <ProjectIcons githubURL="#" websiteURL="#" />
      </FlexDiv>
      <p>Sunt consectetur non irure elit pariatur, irure elit pariatur.</p>
    </article>
  );
}

export default ProjectCard;
