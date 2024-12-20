import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";

export default function App() {
  return (
    <BrowserRouter className="site-wrapper">
      <header>
        <Link to="/" className="site-logo">
          #VANLIFE
        </Link>
        <nav>
          <Link to="/about">About</Link>
          <Link to="/about">Home</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
