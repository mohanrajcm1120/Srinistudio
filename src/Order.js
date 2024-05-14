import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getFirestore, doc, updateDoc, setDoc, getDoc } from 'firebase/firestore';
import './Order.css';
import Nav from './Nav'; // Import your Nav component
import axios from 'axios';

const Order = () => {
  const location = useLocation();
  const { orderId, orderPhoto } = location.state || {};
  const [photo, setPhoto] = useState(null);
  const [notification, setNotification] = useState(null);

  // Function to handle photo upload
  const handlePhotoUpload = (e) => {
    const file = e.target.files[0]; // Get the first selected file
    setPhoto(file);
  };

  const displayForm = !!orderId;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: ''
  });

  const getOrderLine = (orderId) => {
    let orderLine;
    switch (orderId) {
      case 1:
        orderLine = 'Custom PhotoFrame 1';
        break;
      case 2:
        orderLine = 'Custom PhotoFrame 2';
        break;
      case 3:
        orderLine = 'Custom PhotoFrame 3';
        break;
      case 4:
        orderLine = 'Custom PhotoFrame 4';
        break;
      case 5:
        orderLine = 'Custom PhotoFrame 5';
        break;
      case 6:
        orderLine = 'Custom PhotoFrame 6';
        break;
      default:
        orderLine = 'Unknown';
    }
    return orderLine;
  };

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const db = getFirestore();
      const userRef = doc(db, 'users', formData.email);
      const userDoc = await getDoc(userRef);
      const currentDate = new Date();
      const day = String(currentDate.getDate()).padStart(2, '0');
      const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Adding 1 because months are zero-based
      const year = currentDate.getFullYear();
  
      const dateString = `${day}-${month}-${year}`;
      const phone = formData.phone || "No Number";
  
      if (userDoc.exists()) {
        const existingOrders = userDoc.data().orders || []; // Check if orders exist, default to empty array
        // User exists, update their orders array
        await updateDoc(userRef, {
          orders: [...existingOrders, {
            name: formData.name,
            orderLine: getOrderLine(orderId),
            amount: 1000,
            address: formData.address,
            date: dateString
          }]
        });
      } else {
        // User doesn't exist, create a new user document
        await setDoc(userRef, {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          orders: [{
            name: formData.name,
            orderLine: getOrderLine(orderId),
            amount: 1000,
            address: formData.address,
            date: dateString
          }]
        });
      }
  
      // Handle navigation or display success message
      console.log('Order added successfully');
    } catch (error) {
      console.error('Error adding order to database:', error);
      // Handle error
    }
  
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('phone', formData.phone);
    formDataToSend.append('address', formData.address);
    if (photo) {
      formDataToSend.append('photo', photo); // Append the photo to the form data if it exists
    }
  
    console.log("Form Data to Send:", formDataToSend);
  
    console.log("Submitting form...");
    try {
      const response = await axios.post('http://localhost:7000/submit-form', formDataToSend); // Send formDataToSend instead of formData
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
  
    setFormData({
      name: "",
      phone: "",
      email: "",
      address: ""
    });
  };
  

  setTimeout(() => {
    setNotification(null);
  }, 3000);

  // Customize content based on the order ID
  let orderLine;

  if (orderId === 1) {
    orderLine = 'Custom PhotoFrame 1';

  } else if (orderId === 2) {
    orderLine = 'Custom PhotoFrame 2';

  } else if (orderId === 3) {
    orderLine = 'Custom PhotoFrame 3';

  } else if (orderId === 4) {
    orderLine = 'Custom PhotoFramen 4';

  } else if (orderId === 5) {
    orderLine = 'Custom PhotoFrame 5';

  } else if (orderId === 6) {
    orderLine = 'Custom PhotoFrame 6';

  }


  return (
    <div className='Order'>
      <Nav />
      <div className="order-details">
        <h2>Place Order</h2>
        {orderId ? (
          <>
            <p>Product: {orderLine}<br />Price: ₹1000</p>
            <img src={orderPhoto} alt="Order" />
          </>
        ) : (
          <p>No order selected</p>
        )}
      </div>
      {displayForm && orderId && (
        <div className='Form'>Please fill out the form below to place your order
          <form onSubmit={handleSubmit} className="contact-form">
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
              <label htmlFor="phone" className={formData.phone ? "active" : ""}>
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="address" className={formData.address ? "active" : ""}>
                Address
              </label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                rows="4"
                required
              ></textarea>
            </div>
            <div className="form-field">
              <label htmlFor="photo" className="active">
                Upload Photo
              </label>
              <input
                type="file"
                id="photo"
                name="photo"
                accept="image/png, image/jpeg, image/jpg"
                onChange={handlePhotoUpload}
                required
              />
            </div>

            <button type="submit">Place Order</button>
            {notification && <p className="notification">{notification}</p>}
          </form>
        </div>
      )}

    </div>
  );
};

export default Order;
