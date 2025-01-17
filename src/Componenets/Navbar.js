import React from "react";
import { Link } from "react-router-dom";
import '../styles/header.css';
import matsoc from '../Assets/White_Logo_with_full_form.png';

const Navbar = () => {
  return (
    <header className="header">
      <div className="logo">
      <img src={matsoc} alt="MATSOC" width="65" height="65"/>
      </div>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
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
