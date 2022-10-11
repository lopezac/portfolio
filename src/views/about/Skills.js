import { SubTitle } from "Assets/styles/Para";
import LanguagesList from "./LanguagesList";
import TechnologiesList from "./TechnologiesList";
import ToolsList from "./ToolsList";

function Skills() {
  return (
    <section>
      <SubTitle>My Skills</SubTitle>
      <LanguagesList />
      <TechnologiesList />
      <ToolsList />
    </section>
  );
}

export default Skills;
