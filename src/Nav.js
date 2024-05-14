import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import LoginFormModal from './LoginFormModal';

const Nav = () => {

  const [showLoginModal, setShowLoginModal] = useState(false);

  const toggleLoginModal = () => {
    setShowLoginModal(!showLoginModal);
  };


  return (
    <nav className="navbar">
      <div className='top-line'></div>
      <div className='top-line-text'><pre> SRINI STUDIO </pre></div>

      <ul className="navbar-nav">
        <div className="nav-links-container">
          
        <li className='nav-item'>
            <Link to="/" >
              GO BACK
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

export default Nav;
