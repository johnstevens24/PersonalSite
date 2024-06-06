import React, {useState, useEffect} from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/navbar/Navbar.js"
import MobileNavBar from './components/navbar/MobileNavBar.js';
import Footer from './components/footer/Footer.js'
import "./index.css"

import About from "./components/pages/About/About.js"
import Projects from "./components/pages/Projects/Projects.js"
import Contact from "./components/pages/Contact/Contact.js"
import HomePage from './components/pages/Home/HomePage.js';

function App() {

  const [width, setWidth] = useState(window.innerWidth)
  // useEffect(() => {
  //   console.log(width)
  //   window.addEventListener('width', checkWidth);    
  //   return () => {
  //     window.removeEventListener('width', checkWidth);
  //   };
  // }, []);

  // const checkWidth = () => {
  //   console.log(width)
  //   setWidth(window.innerWidth)
  // }

  return (
  <>
    {/* <BrowserRouter>
      {width > 940 ? <Navbar/> : <MobileNavBar/>}
      <Routes>
        <Route path="/about" element={<About/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<Navigate to="/about" replace />} />
      </Routes>
      <Footer/>
    </BrowserRouter> */}
    <HomePage/>
  </>
  );
}

export default App;
