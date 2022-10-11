import { Title } from "Assets/styles/Para";
import Blogs from "./Blogs";
import NavigationBlog from "./NavigationBlog";

export default function Blog() {
  return (
    <section>
      <Title>Recent Articles</Title>
      <Blogs />
      <NavigationBlog />
    </section>
  );
}
