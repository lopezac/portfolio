import { Route, Routes, ReactRouter } from "react-router-dom";

export default function RouteSwitch() {
  return (
    <ReactRouter basename="/">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
        </Route>
      </Routes>
    </ReactRouter>
  );
}
