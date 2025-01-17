import React, { useState, useEffect } from "react";
// import { Worker, Viewer } from '@react-pdf-viewer/core';
// import '@react-pdf-viewer/core/lib/styles/index.css';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import "../styles/home.css";

import pdf from "../pdfs/MSE.pdf";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [pdfUrl, setPdfUrl] = useState(null);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const openPdf = (pdfFile, e) => {
    e.preventDefault();  // Prevent any default behavior (e.g., if it's a link)
    setPdfUrl(pdfFile);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    // Add/remove class to prevent scrolling when popup is open
    if (isOpen) {
      document.body.classList.add("popup-open");
    } else {
      document.body.classList.remove("popup-open");
    }

    return () => {
      document.body.classList.remove("popup-open");
    };
  }, [isOpen]);

  const openLink = (url) => {
    window.open(url, "_blank"); // Opens the link in a new tab
  };

  return (
    <main className="main-content">
      <div className="hero-section">
        <h1>Welcome to MATSOC</h1>
        <p>MATSOC - The Materials Society</p>
        <button className="cta-button" onClick={togglePopup}>
          Know More!
        </button>

        {/* Popup */}
        {isOpen && (
          <div className="popup-overlay" onClick={closePopup}>
            <div
            className="popup-container"
            onClick={(e) => e.stopPropagation()} // Prevent overlay click from closing the popup
          >
            <div className="popup-row">
              <button
                className="popup-button"
                onClick={() =>
                  openLink(
                    "https://drive.google.com/drive/folders/1tfYnCaj2LInRrUrlNSvDTC2TEcO-GWrL"
                  )
                }
              >
                ACADEMICS!
              </button>
              <button
                className="popup-button"
                onClick={() =>
                  openLink(
                    "https://drive.google.com/drive/folders/1ioTE95zfe5GEbEIG-j4x8vC-tVTwPO5P"
                  )
                }
              >
                MSE COURSES PYQs!
              </button>
              <button
                className="popup-button"
                onClick={() =>
                  openLink(
                    "https://drive.google.com/drive/folders/1WkI_aMltxsaInVwjhfMtmoTJ5C9c3mIF"
                  )
                }
              >
                MSE@Matsoc
              </button>
              <button
                onClick={(e) => openPdf(pdf, e)}
                className="popup-button"
              >
                MSE TEMPLATE
              </button> 
            </div>
            {pdfUrl && (
              <div className="pdf-container">
                <Document workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`}>
                  <Page fileUrl={pdfUrl} />
                </Document>
              </div>
            )}
            </div>
          </div>
        )}
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
