import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getFirestore } from "firebase/firestore";
import { doc, getDoc } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'; // Import Firebase authentication methods
import './Navbar.css';


const LoginNav = () => {

  const [currentUser, setCurrentUser] = useState(null);
  const [userName, setUserName] = useState('');


  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, user => {
      setCurrentUser(user);
 // Set loading to false when authentication state is updated
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    const fetchUserName = async () => {
      if (currentUser) {
        const db = getFirestore();
        const userRef = doc(db, "users", currentUser.email); // Use the doc function to reference the user document
        
        try {
          const docSnapshot = await getDoc(userRef);
          if (docSnapshot.exists()) {
            const userData = docSnapshot.data();
            setUserName(userData.name);
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };
  
    fetchUserName();
  }, [currentUser]);


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
          <FontAwesomeIcon icon={faUser} /> {userName ? `${userName}` : ''}
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default LoginNav;
