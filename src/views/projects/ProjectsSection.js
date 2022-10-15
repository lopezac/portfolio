import { GridColumns3To1 } from "Assets/styles/Wrapper";
import ProjectCard from "./ProjectCard";
import projectsData from "Assets/projects.json";

export default function ProjectsSection() {
  return (
    <GridColumns3To1>
      {projectsData.projects.map((project) => {
        return (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            websiteURL={project.websiteURL}
            githubURL={project.githubURL}
            imgPath={project.img}
          />
        );
      })}
    </GridColumns3To1>
  );
}
