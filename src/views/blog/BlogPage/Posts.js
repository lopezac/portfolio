import { useState, useEffect } from "react";
import { useQueryParams } from "Hooks";
import { FlexColGap } from "Assets/styles/Wrapper";
import blogApi from "Utils/api";
import { useSocket } from "Hooks";
import PostCard from "./PostCard";

export default function Posts() {
  const { page } = useQueryParams();
  const [posts, setPosts] = useState([]);
  const api = blogApi();
  const socket = useSocket();

  useEffect(() => {
    api
      .getPosts({ filter: "published=true", page })
      .then((data) => setPosts(data));
  }, []);

  useEffect(() => {
    socket.on("post:publish", (post) => {
      setPosts([...posts, post]);
    });
    socket.on("post:unpublish", (unpublishedPost) => {
      setPosts(posts.filter((post) => post._id !== unpublishedPost._id));
    });
    socket.on("post:delete", (postId) => {
      setPosts(posts.filter((post) => post._id !== postId));
    });
    socket.on("post:update", (updatedPost) => {
      const newPosts = posts.filter((post) => post._id !== updatedPost._id);
      newPosts.push(updatedPost);
      setPosts(newPosts);
    });
  }, [socket, posts]);

  if (!posts.length) return <h2>It seems there are no posts yet!</h2>;
  return (
    <FlexColGap>
      {posts.map((post) => {
        return (
          <PostCard
            key={post._id}
            title={post.title}
            timestamp={post.timestamp}
            text={post.text}
            image={post.imageUrl}
          />
        );
      })}
    </FlexColGap>
  );
}
