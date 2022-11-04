import { Title } from "Assets/styles/Para";
import LanguagesList from "./LanguagesList";
import FrontEndList from "./FrontEndList";
import BackEndList from "./BackEndList";
import ToolsList from "./ToolsList";

function Skills() {
  return (
    <section>
      <Title>My Skills</Title>
      <LanguagesList />
      <FrontEndList />
      <BackEndList />
      <ToolsList />
    </section>
  );
}

export default Skills;
