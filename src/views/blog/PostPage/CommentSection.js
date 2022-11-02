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
    socket.on("get comment", (newComments) => {
      console.log("newComments at get comment", newComments);
    });
  }, []);

  return (
    <section>
      <h2>Comments</h2>
      <NewComment />
      <PostComments comments={comments} />
    </section>
  );
}
