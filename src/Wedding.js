import React, { useState } from "react";
import Nav from './Nav';
import './Portrait.css';
import image1 from './images/Wedding photshoots/3.jpeg';
import image2 from './images/Wedding photshoots/4.jpeg';
import image3 from './images/Wedding photshoots/5.jpeg';
import image4 from './images/Wedding photshoots/6.jpeg';

const Wedding = () => {

  const [fullscreenImage, setFullscreenImage] = useState(null);

  // Function to handle clicking on an image to show it in fullscreen
  const handleImageClick = (imageSrc) => {
    setFullscreenImage(imageSrc);
  };

  // Function to close the fullscreen image
  const closeFullscreenImage = () => {
    setFullscreenImage(null);
  };


  return (
    <div id="portrait" className="portrait">
      <Nav />
      <div className="portrait-description">
        <h2>WEDDING PHOTOGRAPHY</h2>
        <p>Celebrate your love story with stunning wedding photography from SRINI STUDIO. Our experienced photographers specialize in capturing the magic and emotion of your special day, creating timeless images that you'll cherish for a lifetime.</p>
        <p>Our comprehensive wedding photography packages include coverage of pre-wedding events, ceremony, reception, and bridal portraits. We offer a range of customizable options to suit your unique style and preferences.</p>

        <h2>Rates</h2>
        <p>Our wedding photography rates start at <span className="rate"> ₹20000 </span>, with various packages available to suit your needs and budget. Contact us today to schedule your session and let us help you create timeless memories!</p>
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

export default Wedding;

