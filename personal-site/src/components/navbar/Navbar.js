import React from 'react'
import { Link } from "react-router-dom";
// import './NavbarStyles.css'

function Navbar() {
    return (
        <div className='navbar'>
            <ul style={{flexDirection:'row'}}>
                <li><Link to="/about" className='link'>About</Link></li>
                <li><Link to="/projects" className='link'>Projects</Link></li>
                <li><Link to="/contact" className='link'>Contact</Link></li>
            </ul>
        </div>
    )
    
}

export default Navbar