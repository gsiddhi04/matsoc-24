import React from 'react';
import '../styles/home.css';

const Home = () => {
    // return <h1>Welcome to the Home Page</h1>;
    return (
        <main className="main-content">
          <section className="hero-section">
            <h1>Welcome to MATSOC</h1>
            <p>MATSOC - Material Science Society</p>
            <button className="cta-button">Get Started</button>
          </section>
    
          <section id="about" className="about-section">
            <h2>About Us</h2>
            <p>MATSOC is dedicated to improvement and enhancement of the Material Science Students .</p>
          </section>
    
          <section id="services" className="services-section">
            <h2>Our Services</h2>
            <ul>
              <li>Service 1</li>
              <li>Service 2</li>
              <li>Service 3</li>
            </ul>
          </section>
        </main>
      );
};

export default Home;
