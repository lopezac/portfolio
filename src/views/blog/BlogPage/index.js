import { Title } from "Assets/styles/Para";
import { useDocTitle } from "Hooks";
import Posts from "./Posts";
import NavigationBlog from "./NavigationBlog";

export default function Blog() {
  const [docTitle, setDocTitle] = useDocTitle("Recent Articles");

  return (
    <section>
      <Title>Recent Articles</Title>
      <Posts />
      <NavigationBlog />
    </section>
  );
}
