import { useEffect } from "react";
import { string } from "prop-types";
import { NoMarginTitle } from "Assets/styles/Para";
import { StyledHr } from "Assets/styles/Hr";
import { useDocTitle } from "Hooks";
import PostInfo from "./PostInfo";
import PostText from "./PostText";

function Post({ title, timestamp, keyword, text }) {
  const [docTitle, setDocTitle] = useDocTitle(title);

  useEffect(() => {
    setDocTitle(title);
  }, [title]);

  if (!text) return;
  return (
    <section>
      <NoMarginTitle>{title}</NoMarginTitle>
      <PostInfo timestamp={timestamp} keyword={keyword} />
      <PostText text={text} />
      <StyledHr />
    </section>
  );
}

Post.propTypes = {
  title: string,
  timestamp: string,
  keyword: string,
  text: string,
};

export default Post;
