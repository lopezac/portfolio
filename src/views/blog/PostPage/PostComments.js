import { array } from "prop-types";

function PostComments({ comments }) {
  if (!comments.length) return <p>There are no comments</p>;
  return (
    <>
      {comments.map((comment) => {
        return (
          <article key={comment._id}>
            <p>{comment.username}</p>
            <p>{comment.text}</p>
          </article>
        );
      })}
    </>
  );
}

PostComments.propTypes = {
  comments: array,
};

export default PostComments;
