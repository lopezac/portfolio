import { useState, useEffect } from "react";

import PostCard from "./PostCard";
import { FlexColGap } from "Assets/styles/Wrapper";
import blogApi from "Utils/api";
import UseQueryParams from "Hooks/UseQueryParams";

export default function Posts() {
  const { page } = UseQueryParams();
  const [posts, setPosts] = useState([]);
  const api = blogApi();

  useEffect(() => {
    async function getPosts() {
      try {
        const data = await api.getPosts({ filter: "published=true", page });
        setPosts(data);
      } catch (err) {
        throw Error("Error getting posts at effect");
      }
    }
    getPosts();
  }, []);

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
      {!posts.length && <h2>It seems there are no posts yet!</h2>}
    </FlexColGap>
  );
}
