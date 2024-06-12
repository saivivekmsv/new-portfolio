import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainLayout, HomeLayout, ProjectLayout, ResumeLayout } from "./layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/new-portfolio" element={<MainLayout />}>
          <Route path="/new-portfolio/home" element={<HomeLayout />} />
          <Route path="/new-portfolio/resume" element={<ResumeLayout />} />
          <Route path="/new-portfolio/projects" element={<ProjectLayout />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
