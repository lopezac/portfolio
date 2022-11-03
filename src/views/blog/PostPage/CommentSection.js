import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import blogApi from "Utils/api";
import { useSocket } from "Hooks";
import PostComments from "./PostComments";
import NewComment from "./NewComment";

export default function CommentSection() {
  const [comments, setComments] = useState([]);
  const { postId } = useParams();
  const api = blogApi();
  const socket = useSocket();

  useEffect(() => {
    api.getPostComments(postId).then((data) => setComments(data));
  }, []);

  useEffect(() => {
    socket.on("comment:create", (newComment) => {
      setComments([...comments, newComment]);
    });
    socket.on("comment:delete", (commentId) => {
      setComments(comments.filter((comment) => comment._id !== commentId));
    });
    socket.on("comment:update", (updatedComment) => {
      const newComments = comments.filter(
        (comment) => comment._id !== updatedComment._id
      );
      newComments.push(updatedComment);
      setComments(newComments);
    });
  }, [socket, comments]);

  return (
    <section>
      <h2>Comments</h2>
      <NewComment />
      <PostComments comments={comments} />
    </section>
  );
}
