import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import "./App.css";

function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <nav style={{ marginBottom: "1rem" }}>
        <Link to="/" style={{ marginRight: "1rem" }}>
          Home
        </Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
