import { Route, Routes, BrowserRouter } from "react-router-dom";

import Layout from "../Components/Layout";
import AboutPage from "./AboutPage";
import HomePage from "./HomePage";
import ProjectsPage from "./ProjectsPage";
import BlogPage from "./BlogPage";

function RouteSwitch() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="blog" element={<BlogPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RouteSwitch;
