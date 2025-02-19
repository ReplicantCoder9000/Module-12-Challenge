import React from "react";
import { NavLink } from "react-router-dom";
import "./../customStyles.css";

function Header() {
  return (
    <header>
      <h1>Alex Barrios Portfolio</h1>
      <nav>
        <NavLink to="/about" activeClassName="active">About Me</NavLink>
        <NavLink to="/portfolio" activeClassName="active">Portfolio</NavLink>
        <NavLink to="/contact" activeClassName="active">Contact</NavLink>
        <NavLink to="/resume" activeClassName="active">Resume</NavLink>
      </nav>
    </header>
  );
}

export default Header;
