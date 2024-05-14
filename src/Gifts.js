import React from 'react';
import Nav from './Nav';
import { useNavigate } from 'react-router-dom';
import './Gift.css';
import gift1 from './images/custom/1.jpg';
import gift2 from './images/custom/2.jpg';
import gift3 from './images/custom/3.jpg';
import gift4 from './images/custom/4.jpg';
import gift5 from './images/custom/5.jpg';
import gift6 from './images/custom/6.jpg';

const Gifts = () => {

    const navigate = useNavigate();

    const handleOrderNowClick = (orderId, orderPhoto ) => {
      // Navigate to the order page with the order ID
      navigate('/order', { state: { orderId, orderPhoto } });
    };


  return (
    <div className="custom-gifts-page">
        <Nav />
      <div className="gift-description">
        <h2>Custom Designed Gifts</h2>
        <p>Discover our collection of unique and personalized gifts, perfect for any occasion.</p>
        <p>Each gift is carefully crafted with attention to detail, making it a truly special and memorable keepsake for your loved ones.</p>
        <p>Explore our selection below and place your order today!</p>
      </div>
      <div className="gifts-container">
        <div className="gift-item">
          <img src={gift1} alt="Gift 1" />
          <h3>Custom PhotoFrame 1</h3>
          <p>₹1000</p>
          <button onClick={() => handleOrderNowClick(1,gift1)}>Order Now</button>
        </div>
        <div className="gift-item">
          <img src={gift2} alt="Gift 2" />
          <h3>Custom PhotoFrame 2</h3>
          <p>₹1000</p>
          <button onClick={() => handleOrderNowClick(2,gift2)}>Order Now</button>
        </div>
        <div className="gift-item">
          <img src={gift3} alt="Gift 3" />
          <h3>Custom PhotoFrame 3</h3>
          <p>₹1000</p>
          <button onClick={() => handleOrderNowClick(3,gift3)}>Order Now</button>
        </div>
        <div className="gift-item">
          <img src={gift4} alt="Gift 4" />
          <h3>Custom PhotoFrame 4</h3>
          <p>₹1000</p>
          <button onClick={() => handleOrderNowClick(4,gift4)}>Order Now</button>
        </div>
        <div className="gift-item">
          <img src={gift5} alt="Gift 5" />
          <h3>Custom PhotoFrame 5</h3>
          <p>₹1000</p>
          <button onClick={() => handleOrderNowClick(5,gift5)}>Order Now</button>
        </div>
        <div className="gift-item">
          <img src={gift6} alt="Gift 6" />
          <h3>Custom PhotoFrame 6</h3>
          <p>₹1000</p>
          <button onClick={() => handleOrderNowClick(6,gift6)}>Order Now</button>
        </div>
        
      </div>
    </div>
  );
};

export default Gifts;
