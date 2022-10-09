import { useState, useEffect } from "react";

import PostCard from "./PostCard";
import { FlexColGap } from "../../Assets/Styles/Wrapper";
import blogApi from "../../Utils/api";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const api = blogApi();

  useEffect(() => {
    async function getPosts() {
      try {
        const data = await api.getPosts();
        setBlogs(data);
      } catch (err) {
        throw Error("Error getting posts at effect");
      }
    }
    getPosts();
  }, []);

  useEffect(() => {
    console.log("blogs after", blogs);
  }, [blogs]);

  return (
    <FlexColGap>
      {blogs.map((blog) => {
        return (
          <PostCard
            title={blog.title}
            timestamp={blog.timestamp}
            text={blog.text}
            image={blog.image}
          />
        );
      })}
    </FlexColGap>
  );
}
