import React, {useState} from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/navbar/Navbar.js"
import MobileNavBar from './components/navbar/MobileNavBar.js';
import "./index.css"

import About from "./components/pages/About/About.js"
import Projects from "./components/pages/Projects/Projects.js"
import Personal from "./components/pages/Personal/Personal.js"

function App() {

  const [width, setWidth] = useState(window.innerWidth)

  return (
  <>
    <BrowserRouter>
      {width > 940 ? <Navbar/> : <MobileNavBar/>}
      <Routes>
        <Route path="/about" element={<About/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/personal" element={<Personal/>}/>
        <Route path="*" element={<Navigate to="/about" replace />} />
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
