import React from "react";
import "../styles/gallery.css";

import pic1 from '../Assets/pic1.jpg';
import pic2 from '../Assets/pic2.jpg';
import pic3 from '../Assets/pic3.jpg';
import pic4 from '../Assets/pic4.jpg';
import pic5 from '../Assets/pic5.jpg';
import pic6 from '../Assets/pic6.jpg';
import pic7 from '../Assets/pic7.jpg';

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
          style={{ backgroundImage: `url(${pic1})` }}
        ></div>
        <div
          className="box col-2"
          style={{ backgroundImage: `url(${pic2})`  }}
        ></div>
        <div
          className="box"
          style={{ backgroundImage: `url(${pic3})`  }}
        ></div>
        <div
          className="box row-2"
          style={{ backgroundImage: `url(${pic4})`  }}
        ></div>
        <div
          className="box col-2"
          style={{ backgroundImage: `url(${pic5})`  }}
        ></div>
        <div
          className="box"
          style={{ backgroundImage: `url(${pic6})`  }}
        ></div>
        <div
          className="box col-2"
          style={{ backgroundImage: `url(${pic7})`  }}
        ></div>
      </div>
    </div>
  );
};

export default Gallery;
