import {useState} from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  return (
    <nav>
      <ul className="gap-12 md:flex hidden">
        <li><NavLink to="/" className={({isActive})=> isActive ? "text-primary font-medium" : "" }>Home</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/signup">Signup</NavLink></li>
      </ul>

        {/* Mobile Menu */}
        <div className="md:hidden">
          {isMobileMenuOpen && (
            <ul className="absolute bg-white w-full left-0 top-full mt-2 p-4 shadow-lg">
              <li><NavLink to="/" className={({isActive})=> isActive ? "text-primary font-medium block py-2" : "block py-2" }>Home</NavLink></li>
              <li><NavLink to="/contact" className={({isActive})=> isActive ? "text-primary font-medium block py-2" : "block py-2" }>Contact</NavLink></li>
              <li><NavLink to="/about" className={({isActive})=> isActive ? "text-primary font-medium block py-2" : "block py-2" }>About</NavLink></li>
              <li><NavLink to="/signup" className={({isActive})=> isActive ? "text-primary font-medium block py-2" : "block py-2" }>Signup</NavLink></li>
            </ul>
          )}
        </div>
    </nav>
  )
}

export default Navbar;
