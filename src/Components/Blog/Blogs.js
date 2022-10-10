import { useState, useEffect } from "react";

import PostCard from "./PostCard";
import UseQueryParams from "../Hooks/UseQueryParams";
import { FlexColGap } from "../../Assets/Styles/Wrapper";
import blogApi from "../../Utils/api";

export default function Blogs() {
  const { page } = UseQueryParams();
  const [blogs, setBlogs] = useState([]);
  const api = blogApi();

  useEffect(() => {
    async function getPosts() {
      try {
        const data = await api.getPosts(page);
        setBlogs(data);
      } catch (err) {
        throw Error("Error getting posts at effect");
      }
    }
    getPosts();
  }, []);

  return (
    <FlexColGap>
      {blogs.map((post) => {
        return (
          <PostCard
            key={post._id}
            title={post.title}
            timestamp={post.timestamp}
            text={post.text}
            image={post.image}
          />
        );
      })}
    </FlexColGap>
  );
}
