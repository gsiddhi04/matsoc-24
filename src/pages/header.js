import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../styles/header.css';
// import MainPage from '../App.js';
import About from '../pages/about.js';
import Contact from '../pages/contact.js';

const Header = () => {
  return (
    <Router>
    <header className="header">
      <div className="logo">MATSOC</div>
      <nav className="navbar">
      <Routes>
        <ul>
          <li>
          {/* <Route path="/" element={<MainPage />} /> */}
          </li>
          <li>
          <Route path="/about" element={<About />} />
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
            <Route path="/contact" element={<Contact />} />
          </li>
        </ul>
        </Routes>
      </nav>
      
                    
                    
                    
                
    </header>
    </Router>
  );
};

export default Header;
