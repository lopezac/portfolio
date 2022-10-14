import { string } from "prop-types";

import { NoMarginTitle } from "Assets/styles/Para";
import PostInfo from "./PostInfo";
import { SpacedGrayPara } from "../../../assets/styles/Para";

function Post({ title, timestamp, keyword, text }) {
  return (
    <section>
      <NoMarginTitle>{title}</NoMarginTitle>
      <PostInfo timestamp={timestamp} keyword={keyword} />
      <SpacedGrayPara>{text}</SpacedGrayPara>
      {/* <br style={{ color: "white" }}></br> */}
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
