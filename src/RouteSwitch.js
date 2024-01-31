import { Route, Routes, BrowserRouter } from "react-router-dom";

import Layout from "Components/layout";
import HomePage from "Views/home";
import AboutPage from "Views/about";
// import ProjectsPage from "Views/projects";
// import PostPage from "Views/blog/PostPage";

function RouteSwitch() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          {/* <Route path="projects" element={<ProjectsPage />} />
          <Route path=":postId" element={<PostPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RouteSwitch;
