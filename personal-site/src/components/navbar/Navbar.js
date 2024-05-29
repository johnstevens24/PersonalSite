import React from 'react'
import { Outlet, Link } from "react-router-dom";
import './NavbarStyles.css'

function Navbar() {
    return (
        <div className='navbar'>
            <ul>
                <li><Link to="/home" className='link'>Home</Link></li>
                <li><Link to="" className='link'>Personal</Link></li>
                <li><Link to="/projects" className='link'>Projects</Link></li>
            </ul>
        </div>
    )
    
}

export default Navbar