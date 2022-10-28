import { useDocTitle } from "Hooks";
import { Title } from "Assets/styles/Para";
import ProjectsSection from "./ProjectsSection";

function Projects() {
  const [docTitle, setDocTitle] = useDocTitle("My Projects");

  return (
    <section>
      <Title>My Projects</Title>
      <ProjectsSection />
    </section>
  );
}

export default Projects;
