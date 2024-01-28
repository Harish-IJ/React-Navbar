import React from "react";
import Navbar from "./components/Navbar.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import Updates from "./pages/Updates.jsx";
import ContactMe from "./pages/ContactMe.jsx";
import "./app.css";

// Common Routes for the demo
const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="layout">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
            <Route path="/updates" element={<Updates />}></Route>
            <Route path="/contactme" element={<ContactMe />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
