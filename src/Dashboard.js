import React, { useEffect, useState } from "react";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from 'firebase/auth'; // Import Firebase authentication methods

import './Dashboard.css'; // Import your CSS file for styling
import LoginNav from './LoginNav';

const Dashboard = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, user => {
      setCurrentUser(user);
      setLoading(false); // Set loading to false when authentication state is updated
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    const fetchOrders = async () => {
      if (currentUser) {
        const db = getFirestore();
        const userOrdersRef = collection(db, "users");
        const q = query(userOrdersRef, where("email", "==", currentUser.email));

        try {
          const querySnapshot = await getDocs(q);
          const userOrders = [];
          querySnapshot.forEach((doc) => {
            const orderData = { id: doc.id, ...doc.data() };
            console.log("Retrieved Order:", orderData); // Print retrieved order details
            userOrders.push(orderData);
          });
          setOrders(userOrders);
        } catch (error) {
          console.error("Error fetching orders:", error);
        }
      }
    };

    if (currentUser) {
      fetchOrders();
    }
  }, [currentUser]);

  if (loading) {
    return <div>Loading...</div>; // Render loading indicator while authentication state is being fetched
  }

  return (
    <div>
      <LoginNav />
    <div className="dashboard-container">
      <h1>My Orders</h1>
      <table className="dashboard-table">
        <thead>
          <tr>
            <th>Order No</th>
            <th>Ordered By</th>
            <th>Product</th>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((user, userIndex) => (
            user.orders.map((order, orderIndex) => (
              <tr key={`${userIndex}-${orderIndex}`}>
                <td>{userIndex * user.orders.length + orderIndex + 1}</td>
                <td>{order.name}</td>
                <td>{order.orderLine}</td>
                <td>{order.date}</td>
                <td>₹{order.amount}</td>
              </tr>
            ))
          ))}
        </tbody>
      </table>

 
    </div>
    </div>
  );
};

export default Dashboard;
