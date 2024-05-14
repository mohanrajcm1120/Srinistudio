import React, { useState } from "react";
import Nav from './Nav';
import './Portrait.css';
import image1 from './images/Infant photoshoots/3.jpeg';
import image2 from './images/Infant photoshoots/4.jpeg';
import image3 from './images/Infant photoshoots/5.jpeg';
import image4 from './images/Infant photoshoots/1.jpeg';

const Infant = () => {

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
        <h2>INFANT PHOTOSHOOTS</h2>
        <p>Capture the precious moments of infancy with our expert infant photoshoots. Our photographers create a comfortable environment for your baby, ensuring relaxed and natural images that you'll cherish forever.</p>
        <h2>Photoshoot Rates</h2>
        <p>Our infant photoshoot rates start at <span className="rate"> ₹2000 </span>per hour, with various packages available to suit your needs and budget. Contact us today to schedule your session and let us help you create timeless memories!</p>
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

export default Infant;