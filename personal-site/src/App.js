import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar.js"
import "./index.css"

import Home from "./components/pages/Home/Home.js"
import Projects from "./components/pages/Projects/Projects.js"
import Personal from "./components/pages/Personal/Personal.js"

function App() {
  return (
  <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<text>hi</text>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/personal" element={<Personal/>}/>
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
