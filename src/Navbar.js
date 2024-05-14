import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import LoginFormModal from './LoginFormModal';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [showLoginModal, setShowLoginModal] = useState(false);

  const toggleLoginModal = () => {
    setShowLoginModal(!showLoginModal);
  };

  const handleClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="navbar">
      <div className='top-line'></div>
      <div className='top-line-text'><pre> SRINI STUDIO </pre></div>

      <ul className="navbar-nav">
        <div className="nav-links-container">
          <li className={`nav-item ${activeLink === 'home' ? 'active' : ''}`}>
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => handleClick('home')}
            >
              HOME
            </Link>
          </li>
          <li className={`nav-item ${activeLink === 'services' ? 'active' : ''}`}>
            <Link
              to="services"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => handleClick('services')}
            >
              SERVICES
            </Link>
          </li>
          <li className={`nav-item ${activeLink === 'contact' ? 'active' : ''}`}>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => handleClick('contact')}
            >
              CONTACT
            </Link>
          </li>
          <li className="nav-item">
            <a href="#" onClick={toggleLoginModal}>
              <FontAwesomeIcon icon={faUser} /><span className='login'>LOGIN</span>
            </a>
          </li>
        </div>
      </ul>

      {showLoginModal && <LoginFormModal onClose={toggleLoginModal} />}
    </nav>
  );
};

export default Navbar;
