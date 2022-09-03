import { GridColumns3To1 } from "../../Assets/Styles/Wrapper";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section>
      <h2>My Projects</h2>
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
