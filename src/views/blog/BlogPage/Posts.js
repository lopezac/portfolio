import { useState, useEffect } from "react";
import { useQueryParams } from "Hooks";
import { FlexColGap } from "Assets/styles/Wrapper";
import blogApi from "Utils/api";
import PostCard from "./PostCard";

export default function Posts() {
  const { page } = useQueryParams();
  const [posts, setPosts] = useState([]);
  const api = blogApi();

  useEffect(() => {
    api
      .getPosts({ filter: "published=true", page })
      .then((data) => setPosts(data));
  }, []);

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
