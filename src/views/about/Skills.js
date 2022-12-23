import { Title } from "Assets/styles/Para";
import LanguagesList from "./LanguagesList";
import FrontEndList from "./FrontEndList";
import BackEndList from "./BackEndList";
import ToolsList from "./ToolsList";
import ArchitectureList from "./ArchitectureList";
import DeploymentList from "./DeploymentList";

function Skills() {
  return (
    <section>
      <Title>My Skills</Title>

      <LanguagesList />
      <FrontEndList />
      <BackEndList />
      <ArchitectureList />
      <DeploymentList />
      <ToolsList />
    </section>
  );
}

export default Skills;
