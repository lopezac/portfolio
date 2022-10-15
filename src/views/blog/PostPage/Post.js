import { string } from "prop-types";

import { NoMarginTitle } from "Assets/styles/Para";
import PostInfo from "./PostInfo";
import { SpacedGrayPara } from "Assets/styles/Para";
import { StyledHr } from "Assets/styles/Hr";

function Post({ title, timestamp, keyword, text }) {
  return (
    <section>
      <NoMarginTitle>{title}</NoMarginTitle>
      <PostInfo timestamp={timestamp} keyword={keyword} />
      <SpacedGrayPara>{text}</SpacedGrayPara>
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
