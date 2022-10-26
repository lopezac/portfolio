import { string } from "prop-types";

function PostText({ text }) {
  return <p dangerouslySetInnerHTML={{ __html: text }} />;
}

PostText.propTypes = {
  text: string,
};

export default PostText;
