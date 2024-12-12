import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/about';
import Contact from './pages/contact';
import Header from './pages/header';
import Footer from './pages/footer';
import Navbar from './Componenets/Navbar';

function MainPage() {
    return (
        <>
            <Header />
            <Home />
            <Footer />
        </>
    );
}

function App() {
    return (
            <div>
                <Navbar />
                <MainPage/>
                
            </div>
    );
}

export default App;
