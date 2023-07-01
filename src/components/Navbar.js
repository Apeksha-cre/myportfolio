import { Link } from "react-router-dom"
import "./NavbarStyle.css"

import React,{useState} from 'react'

import{FaBars, FaTimes} from "react-icons/fa"

const Navbar = () => {

  
        const[click,setclick] = useState(false);
        const handleclick=()=> setclick(!click);
    




  return (
    <div className="header">
    <Link to='/'>
        <h1>Portfolio</h1>
    </Link>

    <ul className={click ? "nav-menu active" :"nav-menu"}>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/project">Project</Link>
        </li>
        <li>
            <Link to="/about">About</Link>
        </li>
        <li>
            <Link to="/contact">Contact</Link>
        </li>
    </ul>
    <div className="hamburger" onClick={handleclick}>
        {click?(<FaTimes size={20} style={{color:" cornsilk"}} />):(<FaBars size={20} style={{color:" cornsilk"}} />)}
        
        
    </div>
    </div>
  )
}

export default Navbar