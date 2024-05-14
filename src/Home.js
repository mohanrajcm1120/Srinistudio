import React, {useState} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from './images/Portraits/1.jpg';
import image2 from './images/Wedding photshoots/1.jpg';
import image3 from './images/Infant photoshoots/1.jpg';
import image4 from './images/1.jpg';
import image5 from './images/2.jpg';
import './Home.css';

const Home = () => {
  const images = [image1, image2, image3, image4, image5];
  const [isHovering, setIsHovering] = useState(false);

  const settings = {
    dots: true,
    infinite: true, // Enable continuous looping
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true, 
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div id='home' className='Home'>
      <div className="slideshow-container">
        <Slider {...settings} autoplay={!isHovering}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
            <div className='home-content'>
                <p>Welcome to <span className='name'>SRINI  STUDIO</span> , where creativity meets expertise to capture moments that last a lifetime. Our studio is equipped with state-of-the-art equipment and a team of talented photographers who are passionate about their craft. Whether you're looking for stunning portraits, captivating product shots, or memorable event photography, we've got you covered. Our studio environment is designed to inspire creativity and bring out the best in every photograph. From pre-shoot consultations to post-production editing, we provide a seamless experience to ensure your vision is realized with precision and artistry. Let us turn your moments into timeless masterpieces at our photo studio.</p>
            </div>
    </div>
  );
};

export default Home;
