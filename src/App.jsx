import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects";
import ScrollToTop from "./common/ScrollToTop";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="project/:projectId" element={<Projects />} />
        </Routes>
      </Router>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
