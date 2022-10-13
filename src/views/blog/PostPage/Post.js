import { string } from "prop-types";

import { Title } from "Assets/styles/Para";
import PostInfo from "./PostInfo";
import { SpacedGrayPara } from "../../../assets/styles/Para";

function Post({ title, timestamp, keyword, text }) {
  return (
    <>
      <Title>{title}</Title>
      <PostInfo timestamp={timestamp} keyword={keyword} />
      <SpacedGrayPara>{text}</SpacedGrayPara>
    </>
  );
}

Post.propTypes = {
  title: string,
  timestamp: string,
  keyword: string,
  text: string,
};

export default Post;
