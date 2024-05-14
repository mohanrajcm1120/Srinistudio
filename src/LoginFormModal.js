import React, { useState } from "react";
import "./LoginFormModal.css";
import { auth, SignInWithGoogle } from "./firebase/firebase"; // Assuming firebase.js is in the same directory
import { getAnalytics, logEvent } from "firebase/analytics"; // Import getAnalytics and logEvent from firebase/analytics
import { ReactComponent as GoogleIcon } from "./images/google.svg";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAdditionalUserInfo } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { getFirestore, doc, setDoc } from "firebase/firestore";



const LoginFormModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });
  const [mode, setMode] = useState("login");
  const navigate = useNavigate();
  const [error, setError] = useState("");


  const handleSignInWithGoogle = async () => {
    try {
      const result = await SignInWithGoogle();
      const user = result.user;
      const db = getFirestore();  // Initialize Firestore

      if (getAdditionalUserInfo(result).isNewUser) {
        // If the user is new, create a new document in Firestore
        await setDoc(doc(db, "users", user.email), {
          name: user.displayName,
          email: user.email,
          phone: user.phoneNumber || 'No phone number provided',
          orders: []  // Initialize with an empty orders array
        });
      }
      onClose();
      console.log("Navigating");
      navigate('/Dashboard');
    } catch (error) {
      console.error("Google sign-in error:", error);
      setError("Failed to sign in with Google. Please try again later.");
    }  
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    
    e.preventDefault();
    const db = getFirestore(); 

    console.log("Submitting form...");
    try {
      if (mode === "login") {
        await signInWithEmailAndPassword(auth, formData.email, formData.password);
        logEvent(getAnalytics(), 'login', { method: 'email' });
        // Log login event with Firebase Analytics
      } else if (mode === "signup") {
        const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
        const user = userCredential.user;
        await setDoc(doc(db, "users", user.email), {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          orders: []  // Initialize with an empty orders array
        });}
      onClose(); // Close the modal
      navigate('/Dashboard');
    } catch (error) {
      console.error("Authentication error:", error.code, error.message);
      let errorMessage;
      switch (error.code) {
        case "auth/invalid-email":
          errorMessage = "Invalid Email Address";
          break;
        case "auth/user-not-found":
        case "auth/wrong-password":
          errorMessage = "Invalid Email or Password";
          break;
        case "auth/email-already-in-use":
          errorMessage = "Email already in use";
          break;
        default:
          errorMessage = "Invalid Credentials";
      }
      setError(errorMessage); // Set error message
    }
  };


  const toggleMode = () => {
    setMode(mode === "login" ? "signup" : "login");
    setFormData({ email: "", password: "" }); // Reset form data when mode changes
    setError(null);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="close-button" onClick={onClose}>
          <span>&times;</span>
        </div>
        <form onSubmit={handleSubmit} className="form">
          <h2>{mode === "login" ? "Login" : "Sign Up"}</h2>
          <div className="form-field">
            <label htmlFor="name" className={formData.name ? "active" : ""}>
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required={mode === "signup"}  // Only require during signup
            />
          </div>

          <div className="form-field">
            <label htmlFor="phone" className={formData.phone ? "active" : ""}>
              Phone Number
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required={mode === "signup"}  // Only require during signup
            />
          </div><div className="form-field">
            <label htmlFor="email" className={formData.email ? "active" : ""}>
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="password" className={formData.password ? "active" : ""}>
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit">{mode === "login" ? "Login" : "Sign Up"}</button>

          <p>
            {mode === "login" ? "Don't have an account? " : "Already have an account? "}
            <span className="toggle-mode" onClick={toggleMode}>
              {mode === "login" ? "Sign Up" : "Log In"}
            </span>
          </p>
          <p className="google-signin" onClick={handleSignInWithGoogle}>

            <GoogleIcon className="google-icon" /><span className="Google">Sign In with Google </span>

          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginFormModal;
