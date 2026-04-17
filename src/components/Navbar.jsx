import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex gap-12">
        <li><NavLink to="/" className={({isActive})=> isActive ? "text-primary font-medium" : "" }>Home</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/signup">Singup</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar;
