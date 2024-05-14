import React, { useState } from "react";
import "./Contact.css";
import axios from 'axios';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [notification, setNotification] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting form...");
    try {
      const response = await axios.post('http://localhost:5000/submit-form', formData);
      console.log('Response:', response.status);
      if (response.status === 201) {
        console.log('Email sent successfully');
        setNotification("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        console.error('Error sending email');
        setNotification("Error sending email. Please try again later.");
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setNotification("Error sending email. Please try again later.");
    }

    // Clear notification after 3 seconds
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  

  return (
    <div  className="Contact">
      <div className="title">
        <h4 id="contact">CONTACT US</h4>
      </div>
      <div className="line">
        Feel free to contact us any time. We will get back to you as soon as
        we can!
      </div>
      <form onSubmit={handleSubmit} className="form">
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
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="email" className={formData.email ? "active" : ""}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="message" className={formData.message ? "active" : ""}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            required
          ></textarea>
        </div>

        <button type="submit">Submit</button>
        {notification && <p className="notification">{notification}</p>}
      </form>
      <div className="info">
        <div className="head">
          <h3>INFO</h3>
        </div>
        <div className="details">
          <p>
            <span>Phone:</span> +91 98651 78887
          </p>
          <p>
            <span>Email:</span> srinicolourlab@gmail.com
          </p>
          <p>
            <span>Address:</span> 10, Covai Main Road, Avinashi - 641054
          </p>
          <p>
            <span>Business Hours:</span> Mon-Sat: 9:00 AM - 8:00 PM
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
