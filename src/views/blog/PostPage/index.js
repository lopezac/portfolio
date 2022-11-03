import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import blogApi from "Utils/api";
import { useSocket } from "Hooks";
import { formatTitle } from "Utils/helper";
import Post from "./Post";
import CommentSection from "./CommentSection";

export default function PostPage() {
  const { postId } = useParams();
  const [post, setPost] = useState({});
  const api = blogApi();
  const socket = useSocket();
  const navigate = useNavigate();

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

  useEffect(() => {
    socket.on("post:delete", () => {
      setPost(null);
    });
    socket.on("post:update", (updatedPost) => {
      console.log("updatedPost", updatedPost);
      navigate(`/${formatTitle(updatedPost.title)}`);
    });
  }, [socket, post]);

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
