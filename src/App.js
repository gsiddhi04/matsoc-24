import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/about';
import Contact from './pages/contact';
import Header from './pages/header';
import Footer from './pages/footer';
import Navbar from './Componenets/Navbar';


function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/header" element={<Header />} />
                    <Route path="/footer" element={<Footer />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
