import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar.js"
import "./index.css"

import About from "./components/pages/About/About.js"
import Projects from "./components/pages/Projects/Projects.js"
import Personal from "./components/pages/Personal/Personal.js"

function App() {
  return (
  <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<text>hi</text>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/personal" element={<Personal/>}/>
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
