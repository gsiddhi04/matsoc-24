import React from "react";
import "../styles/home.css";

const Home = () => {
  // return <h1>Welcome to the Home Page</h1>;
  return (
    <main className="main-content">
      <div className="hero-section">
        <h1>Welcome to MATSOC</h1>
        <p>MATSOC - The Materials Society</p>
        <button className="cta-button">Know More!</button>
      </div>
      
      <section id="about" className="about-section">
        <h2>MATSOC</h2>
        <p>
          {" "}
          MatSoc, a student led body of the Department of Materials Science and
          Engineering (MSE) at Indian Institute of Technology Kanpur, has
          successfully completed two years since its inception in 2022. This
          society is driven by MSE students and has been working for the
          student-centric professional and personal welfare of the department.
        </p>
      </section>
      <hr></hr>
      <section id="services" className="services-section">
        <h2>Talks and Workshops</h2>
        <ul>
          <li>INTERNXRESEARCH</li>
          <li>WINTER PROJECTS</li>
          <li>OFF CAMPUS INTERN TALK</li>
          <li>HAPPY HOUR</li>
          <li>INTRO TO PROFILES</li>
          <li>GYAN Workshop </li>
        </ul>
      </section>
    </main>
  );
};

export default Home;
