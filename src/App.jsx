import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainLayout, HomeLayout, ProjectLayout, ResumeLayout } from "./layout";

function App() {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/home" element={<HomeLayout />} />
          <Route path="/resume" element={<ResumeLayout />} />
          <Route path="/projects" element={<ProjectLayout />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
