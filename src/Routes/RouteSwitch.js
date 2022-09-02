import { Route, Routes, ReactRouter } from "react-router-dom";

import AboutPage from "./AboutPage";
import ProjectsPage from "./ProjectsPage";

export default function RouteSwitch() {
  return (
    <ReactRouter basename="/">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="about" element={<AboutPage />} />
          <Route path="projects" element={<ProjectsPage />} />
        </Route>
      </Routes>
    </ReactRouter>
  );
}
