import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/about';
import Contact from './pages/contact';
import Footer from './pages/footer';
import Navbar from './Componenets/Navbar';

function MainPage() {
    return (
        <>
            <Home />
            <Footer />
        </>
    );
}

function App() {
    return (
        <Router>
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
    </Router>
    );
}

export default App;
