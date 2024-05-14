import React from 'react';
import { Link } from 'react-router-dom';
import image1 from './images/Portraits/2.jpeg';
import image2 from './images/3.jpeg';
import image3 from './images/Infant photoshoots/2.jpeg';
import image4 from './images/Wedding photshoots/4.jpeg';
import image5 from './images/2.jpeg';
import image6 from './images/1.jpeg';
import './Services.css'; // Custom styles for services

const Services = () => {
  return (
    <div id='services' className='Services'>
       <h4> OUR SERVICES </h4>
    <div className="services-container">
      <div className="service-item-left1">
        <img src={image1} alt="Service 1" />
        <div className="service-text">
         
          <p> <h3>PORTRAITS</h3>Elevate your portraits with our artistic touch, crafting moments that transcend time and space. Discover the beauty of your story through our lens, where every frame is a masterpiece.<br/>
          <br/><br/><Link className="link" to="/portraits">See more</Link></p>
        </div>
      </div>
      <div className="service-item-right">
        <div className="service-text">
          <p> <h3>VIDEOGRAPHY</h3>Immerse yourself in the art of storytelling with our exceptional videography services, where each frame is a symphony of emotions and memories. Let us bring your vision to life on screen, creating cinematic masterpieces that resonate with passion and creativity.<br/>
          <br/><br/><Link className="link" to="/video">See more</Link></p>
        </div>
        <img src={image2} alt="Service 2" />
      </div>
      <div className="service-item-left">
      <img src={image3} alt="Service 3" />
        <div className="service-text">
          <p> <h3>INFANT PHOTOSHOOT</h3>Embark on a journey of love and innocence with our enchanting infant photoshoots, capturing the precious moments of your little one's early days. Witness the pure joy and wonder as we preserve these fleeting moments in timeless elegance.<br/>
          <br/><br/><Link className="link" to="/infants">See more</Link></p>
        </div>
      </div>
      <div className="service-item-right">
        <div className="service-text">
          <p> <h3>WEDDING PHOTOGRAPHY</h3>Step into a world of romance and elegance with our wedding photography services, where we transform your special day into timeless works of art. Let us capture the magic, emotions, and beauty, creating unforgettable memories that you'll cherish forever.<br/>
          <br/><br/><Link className="link" to="/wedding">See more</Link></p>
        </div>
        <img src={image4} alt="Service 4" />
      </div>
      <div className="service-item-left">
      <img src={image5} alt="Service 5" />
        <div className="service-text">
          <p> <h3>PHOTO FRAMES</h3>Transform your memories into cherished treasures with our exquisite photo frames, crafted with love and attention to detail. Elevate your space with personalized frames that showcase your special moments in timeless elegance, adding a touch of warmth and nostalgia to your home.<br/>
          </p>
        </div>
      </div>
      <div className="service-item-right">
        <div className="service-text">
          <p> <h3>CUSTOM DESIGNED GIFTS</h3>Celebrate every occasion with personalized gifts that speak from the heart. Our custom-designed gifts are crafted with love and attention to detail, ensuring a unique and memorable experience for your loved ones. Let us help you create meaningful gestures that will be cherished for a lifetime.<br/>
          <br/><Link className="link" to="/gifts">See more</Link></p>
        </div>
        <img src={image6} alt="Service 6" />
      </div>
    </div>
    </div>
  );
};

export default Services;
