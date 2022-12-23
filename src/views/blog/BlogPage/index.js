import { Title } from "Assets/styles/Para";
import { useDocTitle } from "Hooks";
import Posts from "./Posts";
import NavigationBlog from "./NavigationBlog";
import { BlogPostsDiv } from "./styles";

export default function Blog() {
  const [docTitle, setDocTitle] = useDocTitle("Recent Articles");

  return (
    <BlogPostsDiv>
      <div>
        <Title>Recent Articles</Title>
        <Posts />
      </div>
      <NavigationBlog />
    </BlogPostsDiv>
  );
}
