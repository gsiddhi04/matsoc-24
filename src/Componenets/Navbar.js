import React from "react";
import { Link } from "react-router-dom";
import '../styles/header.css';

const Navbar = () => {
  return (
    <header className="header">
      <div className="logo">MATSOC</div>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          {/* <li><Link to="/header">Header</Link></li> */}
          {/* <li><Link to="/footer">Footer</Link></li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
