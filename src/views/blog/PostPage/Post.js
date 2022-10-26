import { string } from "prop-types";
import { NoMarginTitle } from "Assets/styles/Para";
import PostInfo from "./PostInfo";
import { StyledHr } from "Assets/styles/Hr";
import PostText from "./PostText";

function Post({ title, timestamp, keyword, text }) {
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
