import { Route, Routes, BrowserRouter } from "react-router-dom";

import Layout from "Components/layout";
import HomePage from "Pages/home";
import AboutPage from "Pages/about";
import ProjectsPage from "Pages/projects";
import BlogPage from "Pages/blog/blogPage";
import PostPage from "Pages/blog/postPage";

function RouteSwitch() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="blog" element={<BlogPage />}>
            <Route path=":postId" element={<PostPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RouteSwitch;
