import React from "react";
import { Link } from "react-router-dom";
import '../styles/header.css';
import matsoc from '../Assets/matsoc_iitk_logo.jpeg';

const Navbar = () => {
  return (
    <header className="header">
      <div className="logo">
      <img src={matsoc} alt="MATSOC" width="100" height="50"/>
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
