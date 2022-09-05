import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Route, Routes, useLocation } from "react-router-dom";

import Layout from "../Components/Layout";
import AboutPage from "./AboutPage";
import HomePage from "./HomePage";
import ProjectsPage from "./ProjectsPage";
import "../Assets/Styles/Transitions.css";

function RouteSwitch() {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition key={location.pathname} timeout={400} classNames="fade">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="projects" element={<ProjectsPage />} />
          </Route>
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default RouteSwitch;
