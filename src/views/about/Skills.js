import { Title } from "Assets/styles/Para";
import LanguagesList from "./LanguagesList";
import TechnologiesList from "./TechnologiesList";
import ToolsList from "./ToolsList";

function Skills() {
  return (
    <section>
      <Title>My Skills</Title>
      <LanguagesList />
      <TechnologiesList />
      <ToolsList />
    </section>
  );
}

export default Skills;
