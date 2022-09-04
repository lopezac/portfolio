import { SubTitle } from "../../Assets/Styles/Para";
import { GridColumns3To1 } from "../../Assets/Styles/Wrapper";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section>
      <SubTitle>My Projects</SubTitle>
      <GridColumns3To1>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </GridColumns3To1>
    </section>
  );
}

export default Projects;
