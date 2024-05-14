import React, { useState } from 'react';
import './Video.css';
import Nav from './Nav';
import video1 from "./videos/highlight (1) (1).mp4";
import video2 from "./videos/re (1).mp4";
const Video = () => {
  const [fullscreenVideo, setFullscreenVideo] = useState(null);

  // Function to handle clicking on a video to show it in fullscreen
  const handleVideoClick = (videoSrc) => {
    setFullscreenVideo(videoSrc);
  };

  // Function to close the fullscreen video
  const closeFullscreenVideo = () => {
    setFullscreenVideo(null);
  };

  return (
    <div className="videography-page">
        <Nav/>
      <div className="videography-description">
        <h2>Capturing Timeless Moments through Videography</h2>
        <p>At SRINI STUDIO, we specialize in capturing the magic of life's most precious moments through videography. Our skilled videographers are dedicated to creating cinematic masterpieces that tell your unique story and evoke emotion for years to come.</p>
        <h2>Services Offered</h2>
        <p>We offer a wide range of videography services to suit your needs, including:</p>
        <ul>
          <li>Wedding videography</li>
          <li>Event coverage</li>
          <li>Corporate videos</li>
          <li>Documentaries</li>
          <li>Music videos</li>
          <li>And more...</li>
        </ul>
        <p>Whatever your vision, we'll work closely with you to bring it to life on screen.</p>
        <h2>Rates</h2>
        <p>Our videography services rates start at <span className="rate"> ₹5000 </span>, with various packages available to suit your needs and budget. Contact us today to schedule your session and let us help you create timeless memories!</p>
      </div>
      <div className="videography-examples">
        {/* Include videos with click-to-fullscreen functionality */}
        <div className="video-container">
          <video autoPlay src={video1} controls onClick={() => handleVideoClick(video1)} />
        </div>
        <div className="video-container">
          <video autoPlay src={video2} controls onClick={() => handleVideoClick(video2)} />
        </div>
      </div>
      {/* Fullscreen video modal */}
      {fullscreenVideo && (
        <div className="fullscreen-modal" onClick={closeFullscreenVideo}>
          <video src={fullscreenVideo} controls />
        </div>
      )}
    </div>
  );
};

export default Video;
