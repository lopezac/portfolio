import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import blogApi from "Utils/api";
import PostComments from "./PostComments";
import NewComment from "./NewComment";

export default function CommentSection() {
  const [comments, setComments] = useState([]);
  const { postId } = useParams();
  const api = blogApi();

  useEffect(() => {
    async function getPostComments(id) {
      try {
        const data = await api.getPostComments(id);
        setComments(data);
      } catch (err) {
        throw Error("Error getting post comments", id, err);
      }
    }
    getPostComments(postId);
  }, []);

  return (
    <section>
      <h2>Comments</h2>
      <NewComment />
      <PostComments comments={comments} />
    </section>
  );
}
