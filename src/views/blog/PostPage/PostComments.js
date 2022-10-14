import { array } from "prop-types";

import { FlexColGap } from "../../../assets/styles/Wrapper";
import Comment from "./Comment";

function PostComments({ comments }) {
  if (!comments.length) return <p>There are no comments</p>;
  return (
    <FlexColGap>
      {comments.map((comment) => {
        return (
          <Comment
            key={comment._id}
            username={comment.username}
            text={comment.text}
            timestamp={comment.timestamp}
          />
        );
      })}
    </FlexColGap>
  );
}

PostComments.propTypes = {
  comments: array,
};

export default PostComments;
