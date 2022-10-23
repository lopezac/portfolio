import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import blogApi from "Utils/api";
import Post from "./Post";
import CommentSection from "./CommentSection";

export default function PostPage() {
  const { postId } = useParams();
  const [post, setPost] = useState({});
  const api = blogApi();

  useEffect(() => {
    async function getPost() {
      try {
        const data = await api.getPost(postId);
        setPost(data);
      } catch (err) {
        throw Error("Error getting post at blog", err);
      }
    }
    getPost();
  }, []);

  if (!post) return <h1>No post with that title or id</h1>;
  return (
    <>
      <Post
        title={post.title}
        keyword={post.keyword}
        timestamp={post.timestamp}
        text={post.text}
      />
      <CommentSection />
    </>
  );
}
