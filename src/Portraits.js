import React, { useState } from "react";
import Nav from './Nav';
import './Portrait.css';
import image1 from './images/Portraits/8.jpeg';
import image2 from './images/Portraits/5.jpeg';
import image3 from './images/Portraits/4.jpeg';
import image4 from './images/Portraits/3.jpeg';

const Portraits = () => {

  const [fullscreenImage, setFullscreenImage] = useState(null);

  // Function to handle clicking on an image to show it in fullscreen
  const handleImageClick = (imageSrc) => {
    setFullscreenImage(imageSrc); // Use image source variable here, not a string literal
  };

  // Function to close the fullscreen image
  const closeFullscreenImage = () => {
    setFullscreenImage(null);
  };


  return (
    <div id="portrait" className="portrait">
      <Nav />
      <div className="portrait-description">
        <h2>PORTRAITS</h2>
        <p>At SRINI STUDIO, we specialize in creating stunning portraits that capture the essence and personality of our clients. Our experienced photographers use a combination of artistic vision and technical expertise to deliver high-quality portraits that you'll cherish for a lifetime.</p>
        <p>Our portrait sessions are tailored to meet your specific needs and preferences. Whether you're looking for individual portraits, family portraits, or professional headshots, we have the skills and creativity to bring your vision to life.</p>

        <h2>Portrait Rates</h2>
        <p>Our portrait rates start at <span className="rate"> ₹700 </span>per session, with various packages available to suit your needs and budget. Contact us today to schedule your portrait session and let us help you create timeless memories!</p>
      </div>
      <div className="portrait-gallery">
        <div className="image-container">
          <img src={image1} alt="Portrait 1" onClick={() => handleImageClick(image1)} />
        </div>
        <div className="image-container">
          <img src={image2} alt="Portrait 2" onClick={() => handleImageClick(image2)} />
        </div>
        <div className="image-container">
          <img src={image3} alt="Portrait 3" onClick={() => handleImageClick(image3)} />
        </div>
        <div className="image-container">
          <img src={image4} alt="Portrait 4" onClick={() => handleImageClick(image4)} />
        </div>
      </div>
      {/* Fullscreen image modal */}
      {fullscreenImage && (
        <div className="fullscreen-modal" onClick={closeFullscreenImage}>
          <img src={fullscreenImage} alt="Fullscreen Portrait" />
        </div>
      )}
    </div>
  );
};

export default Portraits;