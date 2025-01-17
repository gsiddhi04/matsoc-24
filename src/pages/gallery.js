import React from "react";
import "../styles/gallery.css";

const Gallery = () => {
  return (
    <div className="container">
      <div className="left-text">
        <h2 className="heading">Gallery</h2>
        <p className="subheading">MATSOC - The Materials Society</p>
      </div>
      <div className="gallery" id="gallery">
        <div
          className="box row-2"
          id="box-1"
          style={{ backgroundImage: "url(Assets/DSC02796.jpg)" }}
        ></div>
        <div
          className="box col-2"
          style={{ backgroundImage: "url(Assets/matsoc_iitk_logo.jpeg)" }}
        ></div>
        <div
          className="box"
          style={{ backgroundImage: "url(img/OAT 2.png)" }}
        ></div>
        <div
          className="box row-2"
          style={{ backgroundImage: "url(img/After 2.jpg)" }}
        ></div>
        <div
          className="box col-2"
          style={{ backgroundImage: "url(img/AFter.jpg)" }}
        ></div>
        <div
          className="box"
          style={{ backgroundImage: "url(img/SenateHall.png)" }}
        ></div>
        <div
          className="box col-2"
          style={{ backgroundImage: "url(img/EC room.jpg)" }}
        ></div>
      </div>
    </div>
  );
};

export default Gallery;
