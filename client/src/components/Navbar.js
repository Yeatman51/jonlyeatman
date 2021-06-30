import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
        <input id="nav-toggle" type="checkbox"></input>
        
        <ul className="links">
            
            <li><Link to="./">Home</Link></li>
            <li><Link to="./Developer">Developer</Link></li>
            <li><Link to="./Designer">Designer</Link></li>
            <li><Link to="./Photographer">Photographer</Link></li>
            <li><Link to="./About">About Me</Link></li>
            <li><Link to="./Contact">Contact</Link></li>
            
        </ul>

        <label htmlFor="nav-toggle" className="icon-burger">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </label>

    </nav>
  
  );
}

export default Navbar;