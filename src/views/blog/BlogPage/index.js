import { Title } from "Assets/styles/Para";
import Posts from "./Posts";
import NavigationBlog from "./NavigationBlog";

export default function Blog() {
  return (
    <section>
      <Title>Recent Articles</Title>
      <Posts />
      <NavigationBlog />
    </section>
  );
}
