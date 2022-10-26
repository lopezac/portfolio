import { string } from "prop-types";
import { SpacedGrayPara } from "Assets/styles/Para";

function PostText({ text }) {
  console.log("text", text);
  return <div dangerouslySetInnerHTML={{ __html: text }} />;
}

PostText.propTypes = {
  text: string,
};

export default PostText;
