import { ReactDOM } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React from "react";
import "./index.css";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <div className=" mx-[20vw]">
      <BrowserRouter>
        <header>
          <Link to={"/"}>#VANLIFE</Link>
          <nav>
            <Link to={"/about"}>About</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
