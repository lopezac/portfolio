import Blogs from "./Blogs";
import NavigationBlog from "./NavigationBlog";
import { Title } from "../../Assets/Styles/Para";

export default function Blog() {
  return (
    <section>
      <Title>Recent Articles</Title>
      <Blogs />
      <NavigationBlog />
    </section>
  );
}
